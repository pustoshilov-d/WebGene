import sqlalchemy

def getUserInfo(request):
    #try:

        response = {}
        id = 0

        request_json = request.get_json()
        if request.args and 'id' in request.args:
            id = int(request.args.get('id'))
        elif request_json and 'id' in request_json:
            id = int(request_json['id'])
        else:
            return "Bad request"

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

        print(result)
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
        result = [{column: value for column, value in rowproxy.items()} for rowproxy in proxyResult]

        print(result)
        response.update({"carouselInfo": result})

        print(response)
        conn.close()

        return str(response)

    #except Exception as e:
    #    return str(e)


if __name__ == '__main__':
    print(getUserInfo('2'))





