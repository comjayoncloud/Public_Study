T = int(input())
result = []
for i in range(T):
    A,B = map(int,input().split())

    C = A+B
    result.append(C)
    
for j in range(1,T+1):
    print("Case #",j,":", result[j-1])
    j+=1