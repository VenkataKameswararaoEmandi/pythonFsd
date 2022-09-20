from typing import List
def twosum(num: list[int], target: int) -> list[int]:
    for i in range(len(num)):
        for j in range(i+1, len(num)):
            if num[i] + num[j] == target:
                return[i,j]

print (twosum([1,2,3,4,5,6],9))