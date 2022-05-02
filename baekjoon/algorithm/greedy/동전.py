# me

N,K = map(int,input().split())
a = []
idx = N-1
count = 0 
for i in range (N):
    b = int(input())
    a.append(b)

while K !=0:
    if a[idx]>K :
        idx -= 1
    else:
        count += K//a[idx]
        K %= a[idx]
print(count)


# short ver

p,*o=open(0)
k=int(p[2:])
c=0
for i in map(int,o[::-1]):c+=k//i;k=k%i
print(c)

# short ver2

n,k=map(int,input().split())
s=0
for a in[int(input())for _ in[0]*n][::-1]:s+=k//a;k%=a
print(s)