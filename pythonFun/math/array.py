arr = [1000,2000]
def fun(t, n):
    for i in arr:
        Ci = i*(1+n*100)*t
        print(Ci)
    fun(2, 10)


