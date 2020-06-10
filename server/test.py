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
            print(1, info)

            try:
                print('есть формы: ')
                for item in request.form.lists():
                    print(item[0], ' --> ', item[1])

                print('есть файлы: ')
                for item in request.files.lists():
                    print(item[0], ' --> ', item[1])

                print('есть арги: ')
                for item in request.args.lists():
                    print(item[0], ' --> ', item[1], )

                print('есть json: ', request.json)
            except Exception as e:
                print('реквест не парсится', e)

            # заполнение данными из реквеста
            info = request.form.to_dict(flat=True)
            info.update({'data_file': request.files['data_file']})
            print(2, info)

            # заполнение отсутсвующих данных
            if 'author_name' not in info: info.update({'author_name': "null"})
            if 'author_email' not in info: info.update({'author_email': "null"})
            if 'data_label' not in info: info.update({'data_label': "null"})
            if 'data_description' not in info: info.update({'data_description': "null"})
            if 'terms_acceptation' not in info: info.update({'terms_acceptation': "false"})
            if 'data_length' not in info: info.update({'data_length': 0})
            if 'date_adding' not in info: info.update({'date_adding': "null"})
            if 'author_name' not in info: info.update({'author_name': "null"})

            print(3, info)

            # проверить файл
            print(type(info['data_file_name']), info['data_file_name'])
            print(re.findall('\w+', info['data_file_name']))
            info.update({'data_file_type_short': re.findall('\w+', info['data_file_name'])[-1]})
            print(3.5, info)
            try:
                if info['data_file_type_short'] in ('xls', 'xlsx'):
                    print('excel')
                    df = pd.read_excel(info['data_file'])
                elif info['data_file_type_short'] == 'csv':
                    print('csv')
                    df = pd.read_csv(info['data_file'])
                else:
                    print('other format')
                    df = pd.read_table(info['data_file'])
                print("Всё ок", df.head())
            except Exception as e:
                print('Файл не оч', e)
                return (json.dumps({"error": str(e), "error_my": "Wrong data format"}), 410, headers)

            info['data_length'] = len(df)

            # проверить столбцы файла
            # if df.columns != ['', '','']:
            #     return (json.dumps({"error": str(e), "error_my":"Wrong columns"}), 411, headers)
            info.update({"data_sample": df.head(3)})
            print(4, info)

            # загрузить инфу в базу   # взять оттуда id
            print(4.2)
            full_name = os.environ.get('DB_FULL_NAME')
            port = os.environ.get('DB_PORT')
            print(4.3)
            print(full_name, port)

            db_url = sqlalchemy.engine.url.URL(
                drivername='postgres+pg8000',
                username=os.environ.get('DB_USERNAME'),
                password=os.environ.get('DB_PASSWORD'),
                database=os.environ.get('DB_DATABASE'),
                # port=os.environ.get('DB_PORT'),
                # host=os.environ.get('DB_HOST'),
                query={'unix_sock': f"/cloudsql/{full_name}/.s.PGSQL.{port}"})
            db = sqlalchemy.create_engine(db_url, )
            print(db_url, db)

            sql = "INSERT INTO users_data(" \
                  "author_name, author_email, " \
                  "data_label, data_description, terms_acceptation, " \
                  "data_length, date_adding, " \
                  "calculated_time, progress,	data_processed) " \
                  "VALUES (\'{0}\', \'{1}\', \'{2}\', \'{3}\', \'{4}\', \'{5}\', " \
                  "\'{6}\', \'{7}\', {8}, {9})"

            sql2 = "select create_data_sample_table()"

            ###добавить data_sample insert самостоятельный
            ###добавить data_path

            sql = sql.format(
                info['author_name'], info['author_email'],
                info['data_label'], info['data_description'], info['terms_acceptation'],
                info['data_length'], datetime.datetime.now(),
                '1 hour', 10, "false")

            print(sql)
            print(sql2)
            print(5, info)

            conn = db.connect()
            proxyResult = conn.execute(sql)
            conn.close()

            print(5.5)
            conn = db.connect()
            proxyResult = conn.execute(sql2)
            result = [{column: value for column, value in rowproxy.items()} for rowproxy in proxyResult]
            conn.close()
            print(result)
            info.update({"id": result[0]['create_data_sample_table']})

            print(6, info)

            if 'data_file_name_storage' not in info: info.update({
                "data_file_name_storage": str(info['id']) + "_train_data." + info['data_file_type_short']})
            if 'data_path' not in info:
                info.update({'data_path': 'for_postUserData/' + info['data_file_name_storage']})

            storage_client = storage.Client()
            bucket = storage_client.bucket(os.environ.get('BUCKET_NAME', 'None'))
            blob = bucket.blob(info['data_path'])
            info['data_file'].seek(0)
            blob.upload_from_file(info['data_file'])

            # запустить обучение
            # startTraining(info['file_path'])

            print(10, info)
            return (json.dumps(info['id']), 200, headers)

    except Exception as e:
        print(e)
        return (json.dumps({"error": str(e)}), 410, headers)
