from distutils.log import debug
from flask import Flask
from middleware import SyncDb
from flask_restful import Api

app = Flask(__name__)
api = Api(app)


api.add_resource(SyncDb, '/db')

app.run(debug=True, port=5000)
