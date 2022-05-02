# ver1

n = int(input())
shape = [[0 for _ in range(19)]for _ in range(19)]

for _ in range(n):
    x,y = map(lambda num : int(num)-1,input().split())
    shape[x][y] = 1 

for s in shape :
    print(*s)

# ver2
import numpy as np
n = int(input())
baduk = np.zeros((19,19),dtype=int)

for _ in range(n):
    x,y = map(int,input().split())
    baduk[x-1][y-1] = 1

for a in baduk:
    print(*a)