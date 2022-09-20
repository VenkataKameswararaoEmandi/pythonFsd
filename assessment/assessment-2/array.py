def area(A, len):
    area = 0
    for i in range(len):
        for j in range(i + 1, len):
            area = max(area, min(A[j], A[i]) * (j - i))
    return area


a = [1, 8, 6, 2, 5, 4, 8, 3, 7]
len1 = len(a)
print(area(a, len1))
