h,b,c,s = map(int,input().split())

result = round((h*(b/8)*c*s)/1024/1024,1)
print(result,"MB")