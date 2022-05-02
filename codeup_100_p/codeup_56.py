a,b =map(bool,input().split())
c=(a and (not b)) or ((not a) and b)

print(c)