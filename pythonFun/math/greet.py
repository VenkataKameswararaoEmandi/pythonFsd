# def greet(name= "Kamesh", message = "Hi ?"):
#     return f"Hello {name}, {message}"

# def sub(a=2, b=5):
#     return f"{a} * {b} = {a - b}"

# def performOperation(name, operation, values=[5, 6]):
#     return f" {greet(name)} . {name} is performing {operation(values[0], values[1])}"

# print(performOperation("Kamesh",sub))


n = 4
for i in range(n):
    for j in range(n-i-1):
        print("", end=" ")
    for j in range(2*i+1):
        print("*", end="")
    print()

for i in range(n-1):
    for j in range(i+1):
        print("", end=" ")
    for j in range(2*(n-i-1)-1):
        print("*", end="")
    print()


def greet(name="Kamesh", message="Hi ?"):
    return f"Hello {name}, {message}"
