from flask import Flask
from routes.index import addRoutes
from db import db

app = Flask(__name__)
app = addRoutes(app)


app.config['SQLALCHEMY_DATABASE_URI'] = "mysql+pymysql://root:password@localhost/sql_clothing"


if __name__ == "__main__":
    db.init_app(app)
    app.run(debug=True, port=5000)
