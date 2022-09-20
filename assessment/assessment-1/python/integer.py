INT_MAX = 2147483647
INT_MIN = -2147483648


def reversDigits(num):
    rev = 0
    while(num > 0):
        rem = num % 10
        num = (num//10)
        if(rev > INT_MAX/10 or rev == INT_MAX/10 and rem > 7):
            return 0
        if(rev < INT_MIN/10 or rev == INT_MIN/10 and rem < -8):
            return 0
        rev = rev*10 + rem

    return rev


num = 123
print(f"Reverse of no. is {reversDigits(num)}")

num = 1000000045
print(f"Reverse of no. is {reversDigits(num)}")
