N,X = map(int,input().split())
result = list(map(int,input().split()))
for i in range(N):
    if result[i] < X:
        print(result[i],end =" ")
# result =[]
# for i in range(N):
#     c = int(input())
#     if (X>c):
#         result.append(c)
#     else :
#         pass

# print(result)