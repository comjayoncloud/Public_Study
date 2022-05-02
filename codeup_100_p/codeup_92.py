#ver1

n = int(input())
a = list(map(int,input().split()))
d = []
for i in range(24):
    d.append(0)
for i in range(n):
    d[a[i]]+=1
for i in range(1,24):
    print(d[i],end=' ') 

#ver 2
n = 10
rand = map(int,input().split())
student = [0 for _ in range(23)]

for r in rand:
    student[r-1] += 1
print(*student)

# https://www.youtube.com/watch?v=5iMaPlGt2i4&list=PLSK4WsJ8JS4dOszA7Zr8paqI81Mv27tNq&index=17