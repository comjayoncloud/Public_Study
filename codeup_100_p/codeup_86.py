# ver1

a = int(input())
result = 0
for i in range(0,a):
    result+=i
    if (result>a):
        print(result)
        break

# ver2
a = int(input())
b,c = 0,0
while True:
    b += c
    c += 1
    if b>=a:
        break
print(b)
