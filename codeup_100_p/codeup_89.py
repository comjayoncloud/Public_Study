# ver1 for문
a,r,n = map(int,input().split())
result = a
for i in range(n-1): # 1~6
    result = result*r     # (2*3)*2 =  
print(result)

# ver2 while문

a,r,n = map(int,input().split())
i,result = 1,a

while (i<n):
    result *= r
    i += 1
print(result)

# ver3 
a, r, n = map(int, input().split())
print (a*(r**(n-1)))