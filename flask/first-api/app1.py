
# from flask import Flask, request, jsonify
# app = Flask(__name__)

# @app.route("/world", methods=["POST"])
# def home():
#     print(request.get_json())
#     return "Hello World"


# @app.route("/hello")
# def homeNew():
#     return "Hello Venkata"


# @app.route("/how")
# def homeNewdesign():
#     reqObj = request.get_json()
#     print(f"Name is {reqObj['name']} and Id is {reqObj['id']}")
#     reqObj["id"] = 10
#     return jsonify(reqObj)


# @app.route("/hi")
# def homeNewthing():
#     return "Hello!, Hi, How are you?"

# # *


# @app.route("/", methods=["POST"])
# def initiate():
#     reqObj = request.get_json()
#     print(f"Stores = Name {reqObj['name']}, Items {reqObj['items']}")
#     return jsonify(reqObj)


# @app.route("/h", methods=["POST"])
# def initiateNew():
#     reqObj = request.get_json()
#     print(f"Items = {reqObj['items']}")
#     return jsonify(reqObj)


# @app.route("/ho", methods=["POST"])
# def initiateNewthing():
#     reqObj = request.get_json()
#     print(f"Name {reqObj['name']}")
#     return jsonify(reqObj)


# stores = [{"name": "Raman Store", "items": [
#     {"name": "shirt", "qty": 56}, {"name": "pant", "qty": 34}]}]


# @app.route("/add/store")
# def getStores():
#     newStore = request.get_json()
#     stores.append(newStore)
#     return jsonify({"data": stores})


# @app.route("/add/item")
# def getAllStores():
#     reqObj = request.get_json()
#     for i in range(len(stores)):
#         if stores[i] == reqObj["storeId"]:
#             stores[i]["items"].append(reqObj)


# @app.route("/store/<int:storeId>/item/<int:itemId>qty", methods=["POST"])
# def changeStore(storeId, itemId):
#     requestObj = request.get_json()
#     for store in stores:
#         if store["id"] == storeId:
#             for item in store["items"]:
#                 if item["id"] == itemId:
#                     item["qty"] == requestObj['qty']
#                     print(stores)
#                 else:
#                     print("item not found")
#         else:
#             print("store not found")
#     return "task completed"


# app.run(debug=True, port=5000)


from flask import Flask, request, jsonify

app = Flask(__name__)

# GET : get the data from the server
# POST ; you send data to server and expect a response
# PUT : When u want to send data to the database and update it
# DELETE : when u want to remove entry


# ? this is called and API
@app.route("/")
def initiate():
    reqObj = request.get_json()  # this is deoctionary
    # string templating
    print(f"Name is {reqObj['name']} and id is {reqObj['id']}")
    reqObj["id"] = 45
    return jsonify(reqObj)
# we can convert only dictionary to JSON object


stores = [
    {"id": 0,
        "name": "Raman Store",
     "items": [
         {"id": 0, "name": "Shirt", "qty": 56},
         {"id": 1, "name": "Pants", "qty": 34}
     ]
     }]

# ! write the following APIS
# * use POST request for all of them and make changes in the above stores variable

# ? get All the stores


@app.route("/stores")
def getAllStores():
    return jsonify({"data": stores})


@app.route("/store/<string:name>")
def getStore(name):
    return {'store-name': name}


# ? get all the items from the store
@app.route("/store/<int:storeId>/items")  # * {storeId: }
def getAllItemsOfStore(storeId):
    for store in stores:
        if store["id"] == storeId:
            return jsonify({"data": store["items"]})
    return jsonify({"data": []})


# ? get the quantity of specific item in the store
# * {storeId: , itemId: }
@app.route("/store/<int:storeId>/item/<int:itemId>/qt")
def getQuantityOfItemInStore(storeId, itemId):
    for store in stores:
        if store["id"] == storeId:
            for item in store["items"]:
                if item["id"] == itemId:
                    return jsonify({"data": item["qty"]})
    return jsonify({"data": -1})


# ? add a new store
@app.route("/add/store")
def addNewStore():
    newStore = request.get_json()
    stores.append(newStore)
    return jsonify({"data": stores})


# ? add a new item to specific store
@app.route("/add/item")
def addItemToStore():
    reqObj = request.get_json()
    for i in range(len(stores)):
        if stores[i] == reqObj["storeId"]:
            stores[i]["items"].append(reqObj)


app.run(debug=True, port=5000)
