import json
import sqlalchemy
import logging

def getUserInfo(request):

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
            response = {}
            id = 2

            request_json = request.get_json()
            if request.args and 'id' in request.args:
                id = int(request.args.get('id'))
            elif request_json and 'id' in request_json:
                id = int(request_json['id'])
            else:
                print(request_json)
                return (str(request), 402, headers)

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

            sql = "SELECT * FROM users_data WHERE id =%s"
            proxyResult = conn.execute(sql, str(id))
            result = [{column: value for column, value in rowproxy.items()} for rowproxy in proxyResult]

            response.update({"pageInfo": result})

            if id == 0 or id == '0':
                sql = "select * from users_data " \
                    "except (select * from users_data where id = %s or id = 0) " \
                    "order by id desc limit 5;"
            else:
                sql = "select * from users_data where id = 0 union all( " \
                    "select * from users_data " \
                    "except (select * from users_data where id = %s) " \
                    "order by id desc) limit 5;"

            proxyResult = conn.execute(sql, str(id))
            result = [{column: value for column, value in rowProxy.items()} for rowProxy in proxyResult]

            response.update({"carouselInfo": result})

            conn.close()

            logging.info(response)
            print(response)

            return (json.dumps(response), 200, headers)


    except Exception as e:
        logging.info(e)
        print(e)
        return (str(e), 410, headers)

if __name__ == '__main__':
    print(getUserInfo('2'))





