# ver1

a= int(input()) # 10
s=0
for i in range(1,a):  # 0 ~ 10 10번반복.
    s += i              # s에 값 넣기.
    if (s>=a):          # s가 같아지거나 커지면 
        print(i)
        break

# ver2

a,b=0,0
c = int(input())
while(a<c):
    b+=1
    a+=b
print(b)

