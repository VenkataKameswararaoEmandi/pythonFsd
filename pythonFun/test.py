# num = 10
# name = "Kamesh"

# print(name)

# def showItems(items=[1,2,3,4,5]):
#     temp = ""
#     for i in items:
#         temp = f"{temp} {i}"
#     return temp

# print(showItems())

def getDiamond(num):
    i, j, flag = 1, num // 2, False
    while i > 0:
        print("  " * j, "* " * i)
        if i < num and not flag:
            i, j = i + 2, j - 1
        else:
            flag, i, j = True, i - 2, j + 1


def greet(name="Kamesh", message="Hi ?"):
    return f"Hello {name}, {message}"


def perform(function=getDiamond, title="something"):
    print(greet(title))
    function(5)


def anotherOperation(val):
    print(f"I have number{val}")


perform(title="Operation")


# def addToQueue(value, arr):
#     arr.append(value)
#     print(arr)


# def removeFromQueue(arr):
#     if len(arr) > 0:
#         arr.pop(0)
#     print(arr)


# Queue = []
# addToQueue(10, Queue)
# addToQueue(20, Queue)
# addToQueue(30, Queue)
# removeFromQueue(Queue)
# addToQueue(20, Queue)
# addToQueue(30, Queue)
# removeFromQueue(Queue)
# addToQueue(20, Queue)
# addToQueue(30, Queue)
# removeFromQueue(Queue)
