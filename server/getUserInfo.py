def hello_world(request):
    try:
        import sqlalchemy
        # The SQLAlchemy engine will help manage interactions, including automatically
        # managing a pool of connections to your database
        db = sqlalchemy.create_engine(
        # Equivalent URL:
        # mysql+pymysql://<db_user>:<db_pass>@/<db_name>?unix_socket=/cloudsql/<cloud_sql_instance_name>
            sqlalchemy.engine.url.URL(
                drivername='postgres+pg8000',
                username='postgres',
                password='Dimkach3',
                database='users-data',
                query={'unix_sock': '/cloudsql/{}/.s.PGSQL.5432'.format('webgene:europe-west3:users-data-db')},
            ),
        # ... Specify additional properties here.
        # ...

        )

        stmt = sqlalchemy.text(
            "SELECT * FROM users_data"
        )

        # Using a with statement ensures that the connection is always released
        # back into the pool at the end of statement (even if an error occurs)
        with db.connect() as conn:
            result = conn.execute(stmt)
            return str(result[0])
    except Exception as e:
        return str(e)

    """Responds to any HTTP request.
    Args:
        request (flask.Request): HTTP request object.
    Returns:
        The response text or any set of values that can be turned into a
        Response object using
        `make_response <http://flask.pocoo.org/docs/1.0/api/#flask.Flask.make_response>`.
    """
    #request_json = request.get_json()
    #if request.args and 'message' in request.args:
    #    return request.args.get('message')
    #elif request_json and 'message' in request_json:
    #    return request_json['message']
    #else:
    #    return f'Hello World!'
