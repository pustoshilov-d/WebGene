import sys

import env

import os
import json
import sqlalchemy
import logging
import datetime
import pandas as pd
from google.cloud import storage
import re

def postUserData(request):

    info = {}
    print(str(request))
    headers = {
            'Access-Control-Allow-Origin': '*',
            "Access-Control-Allow-Methods": "POST, post",
    }

    try:
        if request.method == 'OPTIONS':
            # Allows GET requests from any origin with the Content-Type
            # header and caches preflight response for an 3600s
            headers = {
                'Access-Control-Allow-Origin': '*',
                "Access-Control-Allow-Credentials": "true",
                "Access-Control-Allow-Methods": "POST, post",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Origin",
                'Access-Control-Max-Age': '3600'
            }
            return ('', 204, headers)

        else:
            info = request.get_json()
            return (json.dumps(info), 200, headers)

        info = request

        #проверить файл
        info.update({'data_file_type':re.findall('\w+', info['data_file'].name)[-1]})
        print(info)
        try:
            if info['data_file_type'] in ('xls', 'xlsx'):
                print('excel')
                df = pd.read_excel(info['data_file'])
            else:
                print('csv')
                df = pd.read_csv(info['data_file'])
            print("Всё ок", df.head())
        except Exception as e:
            print('Файл говно',e)
            return
            # return (json.dumps({"error": str(e)}), 410, headers)



        #проверить столбцы файла
        info.update({"data_sample": None})

        return

        # загрузить инфу в базу   # взять оттуда id
        full_name = os.environ['DB_FULL_NAME'],
        port = os.environ['DB_PORT'],

        #local flag = True
        if True:
        # if Flase:
            db = sqlalchemy.create_engine(
                sqlalchemy.engine.url.URL(
                    drivername='postgres+pg8000',
                    username=os.environ['DB_USERNAME'],
                    password=os.environ['DB_PASSWORD'],
                    database=os.environ['DB_DATABASE'],
                    port=os.environ['DB_PORT'],
                    host=os.environ['DB_HOST'],
                ),
            )
        else:
            db = sqlalchemy.create_engine(
                sqlalchemy.engine.url.URL(
                    drivername='postgres+pg8000',
                    username=os.environ['DB_USERNAME'],
                    password=os.environ['DB_PASSWORD'],
                    database=os.environ['DB_DATABASE'],
                    query={'unix_sock': f"/cloudsql/{full_name}/.s.PGSQL.{port}"},
                ),
            )


        #заполнение отсутсвующих данных
        if 'author_name' not in info: info.update({'author_name': "null"})
        if 'author_email' not in info: info.update({'author_email': "null"})
        if 'data_label' not in info: info.update({'data_label': "null"})
        if 'data_description' not in info: info.update({'data_description': "null"})
        if 'terms_acceptation' not in info: info.update({'terms_acceptation': "false"})
        if 'data_length' not in info: info.update({'data_length': 0})
        if 'date_adding' not in info: info.update({'date_adding': "null"})
        if 'author_name' not in info: info.update({'author_name': "null"})

        print(info)

        conn = db.connect()


        sql = "INSERT INTO users_data(" \
              "author_name, author_email, " \
              "data_label, data_description, terms_acceptation, " \
              "data_length, date_adding, " \
              "calculated_time, progress,	data_processed) " \
              "VALUES (\'{0}\', \'{1}\', \'{2}\', \'{3}\', \'{4}\', \'{5}\', " \
              "\'{6}\', \'{7}\', {8}, {9}); " \
              "select create_data_sample_table();"

        sql = sql.format(
            info['author_name'], info['author_email'],
            info['data_label'], info['data_description'], info['terms_acceptation'],
            info['data_length'], datetime.datetime.now(),
            '1 hour', 10, "false")


        print(sql)
        print(info)

        proxyResult = conn.execute(sql)
        result = [{column: value for column, value in rowproxy.items()} for rowproxy in proxyResult]
        print(result)
        info.update({"id": result[0]})

        conn.close()

        #сохранить в стор
        """Uploads a file to the bucket."""
        # bucket_name = "your-bucket-name"
        # source_file_name = "local/path/to/file"
        # destination_blob_name = "storage-object-name"
        if 'data_file_name' not in info: info.update({
            "data_file_name": str(info['id']) + "_train_data." + info['data_file_type']})
        if 'data_path' not in info: info.update({'data_path': os.environ['BUCKET_NAME']+info['data_file_name']})

        storage_client = storage.Client()
        bucket = storage_client.bucket(os.environ['BUCKET_NAME'])
        blob = bucket.blob(info['data_file_name'])
        blob.upload_from_file(info['data_file'])

        #запустить обучение
        startTraining(info['file_path'])


        print(info['id'])
        return (json.dumps(info['id']), 200, headers)


    except Exception as e:
        print(e)
        return (json.dumps({"error": str(e)}), 410, headers)

if __name__ == '__main__':
    data_file = open("data/data_sample.xlsx", 'rb')
    df = pd.read_excel(data_file)
    print(df)
    res = postUserData({"data_file":data_file})
    print(res)





