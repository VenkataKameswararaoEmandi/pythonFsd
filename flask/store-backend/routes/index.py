from flask_restful import Api
from resources.customers import Customer, UpdateUser, FetchAllCustomers


def addRoutes(app):
    api = Api(app)
    api.add_resource(Customer, "/auth/<int:custId>")
    api.add_resource(FetchAllCustomers, "/customers")
    api.add_resource(UpdateUser, "/updateUser")
    return app
