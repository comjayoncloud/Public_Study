# ver1 for문
a,m,d,n = map(int,input().split())
result = a
for i in range(n-1):
    result = result*m+d

print(result)

# ver2 while문
a,m,d,n = map(int,input().split())
result,i = a,1
while(i<n):
    result = result*m+d
    i+=1
print(result)