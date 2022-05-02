# ver1

# T = int(input())
# for _ in range(T):
#     A,B = map(int,input().split())
#     print(A+B)

# ver2

T = int(input())
result = []
for _ in range(T):
    A,B = map(int,input().split())
    C = A+B
    result.append(C)
for i in range(T):
    print(result[i])
    i+=1
