from cmath import log
from flask import request
from flask_restful import Resource
from model.customerTable import Customers
from db import db


class Customer(Resource):
    def put(self, custId):
        requestBody = request.json
        newCustomer = Customers(fullName=requestBody.get(
            'name', None), address=requestBody.get('address', None), number=requestBody.get('number', None), prime=requestBody.get('prime', None))
        db.session.add(newCustomer)
        db.session.commit()

    def get(self, custId):
        result = Customers.query.filter_by(customerId=custId).first()
        return result.convertRes()


class FetchAllCustomers(Resource):
    def get(self):
        result = Customers.query.all()
        temp = []
        for ele in result:
            temp.append(ele.convertRes())
        temp = {"res": temp}
        return temp


class UpdateUser(Resource):
    def post(self):
        pass
