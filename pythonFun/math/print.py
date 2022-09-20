# num = 10
# name = "Kamesh"
# floatNum = 15.123

# # print("old num values", num)
# num = floatNum

# print("new num values", num)

# x, y = 25, "Kamesh"
# arr = [9, y, "hello"]
# print(arr)

# a = 10

# if a % 7 == 0:
#     print("multiple of 7")
# elif a % 3 == 0:
#     print("Even")
# else:
#     print("odd")


# if a % 7 == 0:
#     print("multiple of 7")
# if a % 2 == 0:
#     print("Even")
# else:
#     print("odd")


# i = 0
# while i < 100:
#     i = i+1
#     if i % 2 == 0:
#         print (i)

# i = 0
# while i < 100:
#     i += 2
#     print (i, end = " ")


n = 5
count=1
for i in range(1, n+1):
    print("*", end="")
    if i>2:
        print(" "*(count),end="")
        count += 1
    if i>1:
        print("*")
    else:
        print()

for i in range(n,2*n):
    print("*", end="")
    if i<2*n-2:
        count -= 1
        print(" "*(count),end="")
    if i<2*n-1:
        print("*")
    else:
        print()


# i, flag = 1, False
# while i > 0:
#     print("* " * i)
#     if i < 5 and not flag:
#          i += 1
#     else:
#         flag = True
#         i -= 1
