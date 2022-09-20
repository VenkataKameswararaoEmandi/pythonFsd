N = 3


def rotate90Clockwise(arr):
    global N
    for j in range(N):
        for i in range(N - 1, -1, -1):
            print(arr[i][j], end=" ")
        print()


arr = [[1, 2, 3],
       [4, 5, 6],
       [7, 8, 9]]
rotate90Clockwise(arr)
