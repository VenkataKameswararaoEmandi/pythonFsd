from select import select
import mysql.connector
myDb = mysql.connector.connect(
    host="127.0.0.1", user="root", passwd="123456", database="sql_clothing")
myCursor = myDb.cursor()


class DbTableSync():

    @classmethod
    def addStore(cls, name, address, invId, locationId):
        myDb = mysql.connector.connect(
            host="127.0.0.1", user="root", passwd="123456", database="sql_clothing")
        myCursor = myDb.cursor()
        insertQuery = "INSERT INTO sql_store (name, address, invId, locationId) VALUES (%s, %s, %s, %s)"
        val = [(name, address, invId, locationId)]
        myCursor.executemany(insertQuery, val)
        myDb.commit()


class CustomersCont():
    @classmethod
    def addCustomer(cls, fullName, address, number, prime):
        myDb = mysql.connector.connect(
            host="127.0.0.1", user="root", passwd="123456", database="sql_clothing")
        myCursor = myDb.cursor()
        insertQuery = "INSERT INTO sql_store (fullName, address, number, prime) VALUES (%s, %s, %s, %s)"
        val = [(fullName, address, number, prime)]
        myCursor.executemany(insertQuery, val)
        myDb.commit()


class InventoryCont():
    @classmethod
    def addInventory(cls, prodId, name, description, qty, price, locId):
        myDb = mysql.connector.connect(
            host="127.0.0.1", user="root", passwd="123456", database="sql_clothing")
        myCursor = myDb.cursor()
        insertQuery = "INSERT INTO sql_store (prodId, name, description, qty, price, locId) VALUES (%s, %s, %s, %s,  %s, %s)"
        val = [(prodId, name, description, qty, price, locId)]
        myCursor.executemany(insertQuery, val)
        myDb.commit()


class LocationCont():
    @classmethod
    def addLocation(cls, locId, name):
        myDb = mysql.connector.connect(
            host="127.0.0.1", user="root", passwd="123456", database="sql_clothing")
        myCursor = myDb.cursor()
        insertQuery = "INSERT INTO sql_store (locId, name) VALUES (%s, %s)"
        val = [(locId, name)]
        myCursor.executemany(insertQuery, val)
        myDb.commit()
