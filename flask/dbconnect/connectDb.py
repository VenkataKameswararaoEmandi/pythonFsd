# import mysql.connector
# myDb = mysql.connector.connect(
#     host="127.0.0.1", user="root", passwd="123456", database="sql_store")

# myCursor = myDb.cursor()

# selectCommand = "SELECT first_name, last_name FROM orders o JOIN customers c ON o.customer_id = c.customer_id"
# selectCommand = "CREATE TABLE appUsers (id int, username text, password text)"
# myCursor.execute(selectCommand)
# result = myCursor.fetchall()
# for row in result:
#     print(f"{row[0]} {row[1]}")

# appUser = (1, "Venkata", "abc")
# appUsers = [(2, "Kamesh", "abc"), (3, "Dhoni", "abc"), (4, "Mahi", "abc")]
# insertQuery = "INSERT INTO appUsers VALUES (%s, %s, %s)"
# myCursor.executemany(insertQuery, appUsers)

# myDb.commit()
# myDb.close()

import mysql.connector
myDb = mysql.connector.connect(
    host="127.0.0.1", user="root", passwd="123456", database="sql_clothing")

myCursor = myDb.cursor()
# selectCommand = "CREATE TABLE sql_customers (customerId int Auto_INCREMENT PRIMARY KEY, fullName VARCHAR(50), address text, number int, prime int)"
# selectCommand = "CREATE TABLE sql_store (storeId int, name text, address text, invId int, locationCode int)"
# selectCommand = "CREATE TABLE sql_inventory (prodId int, name text, description text, qty int, price int, locId int)"
# selectCommand = "CREATE TABLE sql_location (locId int, name text)"
# myCursor.execute(selectCommand)
# myCursor.execute(selectCommand)
# myCursor.execute(selectCommand)
# myCursor.execute(selectCommand)

myDb.commit()
myDb.close()
