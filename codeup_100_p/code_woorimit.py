import numpy as np
cur = tuple(map(int,input().split()))
lft, rgt , up, down = map(int,input().split())
#coords = [[0 for _ in range(5)] for _ in range(5) ] # 가로로 나옴
coords = np.zeros( (5,5), dtype=int ) # 시각적으로 잘보여줌 . numpy의 장점
move = ( cur[0]-up+down , cur[1] -lft+rgt)
coords[move[0]-1][move[1]-1]=1

for crd in coords:
    print(*crd)