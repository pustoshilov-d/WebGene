import env

import os
import json
import sqlalchemy
import logging

def postUserData(request):

    user_info = {}

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

            user_info = request.get_json()
            return (json.dumps(user_info), 200, headers)


            #проверить файл
            #проверить столбцы файла
            user_info.update({"data_sample": None})

            # загрузить инфу в базу   # взять оттуда id
            db = sqlalchemy.create_engine(
                sqlalchemy.engine.url.URL(
                    drivername='postgres+pg8000',
                    username='postgres',
                    password='12345678',
                    database='users-data',
                    # host="35.198.160.119",
                    # port="5432",
                    query={'unix_sock': '/cloudsql/{}/.s.PGSQL.5432'.format('webgene:europe-west3:users-data-db2')},
                ),
            )

            conn = db.connect()

            # добавить create table и update data_sample_path
            sql = "INSERT INTO users_data(" \
                  "author_name, author_email, " \
                  "data_label, data_description, terms_acceptation, " \
                  "data_sample_path, data_length, date_adding, " \
                  "calculated_time, progress,	data_processed) " \
                  "VALUES ({info.author_name}, {info.author_email}, " \
                  "{info.data_label}, {info.data_description}, {info.terms_acceptation}, " \
                  "{info.data_sample_path}, {info.data_length}, {info.date_adding}, " \
                  "'1 hour', 10, false); " \
                  "select max(id) from users_data;"

            proxyResult = conn.execute(sql)
            result = [{column: value for column, value in rowproxy.items()} for rowproxy in proxyResult]
            user_info.update({"id": result[0]})

            conn.close()

            #сохранить в стор
            user_info.update({"data_file_name": str(user_info['id']) + "_train_data"})


            user_info.update({"data_path": None})



            #запустить обучение



            print(user_info['id'])
            return (json.dumps(user_info['id']), 200, headers)


    except Exception as e:
        print(e)
        return (str(e), 410, headers)

if __name__ == '__main__':
    data_file = open("data/data_sample.csv", 'r')
    res = postUserData(json.dumps({"data_file":data_file}))
    print(res)





