# ver1

a,b,c = map(int,input().split())
if a%2==0:
    print("even")
else :
    print("odd")
if b%2==0:
    print("even")
else :
    print("odd")
if c%2==0:
    print("even")
else :
    print("odd")

# ver2
a,b,c = map(int,input().split())
d = "even" if a%2==0 else "odd"
e = "even" if b%2==0 else "odd"
f = "even" if c%2==0 else "odd"

print(d)
print(e)
print(f)