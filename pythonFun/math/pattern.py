i, flag = 1, False
while i > 0:
    print("* " * i)
    if i < 5 and not flag:
         i += 1
    else:
        flag = True
        i -= 1

# n = 5
# i = 0
# while i < n :
#     j = i+1
#     while j>0:
#         print("*", end = " ") 
#         j = j-1
#     i = i+1
#     print()