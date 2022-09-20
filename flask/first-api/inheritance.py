class Person():
    def __init__(self, name, dob) -> None:
        self.name = name
        self.dob = dob

    def greet(self):
        print()


class Engineer(Person):
    def __init__(self, name, dob, country) -> None:
        Person.__init__(self, name, dob)
        self.country = country

    def start(self):
        print(f"{self.name} hi, {self.dob}, {self.country}")
        Person.greet(self)


class Doctor(Person):
    def __init__(self, name, dob, country) -> None:
        Person.__init__(self, name, dob)
        self.country = country

    def start(self):
        print(f"Hello {self.name}, {self.dob}, {self.country}")
        Person.greet(self)


obj1 = Engineer("Venkata", '16-12-2000', "India")
obj2 = Doctor("Kamesh", '16-12-2000', "India")
obj1.start()
obj2.start()


class CEO(Engineer):
    def __init__(self, name, dob, country, post) -> None:
        Person.__init__(self, name, dob)
        self.country = country
        self.post = post

    def start(self):
        print(f"My post is {self.post}, Hi {self.name}, {self.country}")
        Person.greet(self)


obj3 = CEO("Venkata", '16-12-2000', "India", "CEO")
obj3.start()


#  filter function

# arr = [{'name': "Venkata", 'id':1}, {'name': "Kamesh", 'id':2}]
# result = {}
# for item in arr:
#     if item['id'] == 1:
#         result = item

# result = next(filter(lambda x: x['id'] == 1, arr ))

arr = [{"name": "Venkata", "id": 1}, {"name": "Kamesh", "id": 2}]


class Person():
    array = []

    def __init__(self, name, id) -> None:
        self.name = name
        self.id = id


def __str__(self) -> str:
    return f"{self.name} {self.id}"


def addPerson(person: Person):
    arr.append({"name": "mahi", "id": 3})
    for name in arr:
        if id():
            return True


# dic = [{'name': "Venkata", 'id': 1}, {'name': "Kamesh", 'id': 2}]
# print(dic['name'])
# dic['name'] = 'Dhoni'
tempArray = []
accessMemory = {}


def addPerson(person: Person):
    tempRes = next(filter(lambda item: item.id ==
                   person.id, tempArray), None)
    if tempRes is None:
        tempArray.append(person)
        return {'message': 'Done'}
    else:
        return {'message': 'sorry'}


def getPerson(personId: int):
    tempRes = next(filter(lambda item: item.id == personId, tempArray), None)
    if tempRes is not None:
        res = accessMemory.get(personId, None)
        if res is None:
            accessMemory[personId] = 1
        else:
            accessMemory[personId] += 1
        return tempRes
    else:
        return {'message': 'sorry'}


def getAccessCount(personId: int):
    return accessMemory.get(personId, {'message': 'sorry'})



num = [10, 20, 30, -15, 0, -12]
print("list: ", num)
new_num = list(filter(lambda x: x<0, num))
print("negative numbers: ", new_num)

num = [10, 20, 30, -15, 0, -12]
print("list: ", num)
new_num = list(filter(lambda x: x%2 != 0, num))
print("positive numbers: ", new_num)