f = open("hellofile.txt", 'w')
f.write("hello, how are you doing\n")

f.close()
f = open("hellofile.txt", 'r+')

string = ""
while True:
    line = f.readline()
    if not line:
        break
    line = (line.strip())
    string = string + line+"*-*"+"\n"
f.close()

f = open("hellofile.txt", 'w')
f.write(string)
f.close()

f = open("hellofile.txt", 'r')
for i in f:
    print(i.split(","))
f.close()
# content = f.readline()
# print(content)
# content = f.readline()
# print(content)

# content = f.readline()
# print(content)
# content = f.readline()
# print(content)

# f.seek(0)
