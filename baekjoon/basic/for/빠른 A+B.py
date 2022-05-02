import sys 
T = int(sys.stdin.readline())
result = []
for i in range(T):
    A,B = map(int,sys.stdin.readline().split())
    C = A+B
    result.append(C)

for j in range(T):
    print(result[j])
    j+=1