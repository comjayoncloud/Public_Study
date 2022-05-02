# ver1

x = int(input())
y = int(input())

if (x <0 and y>0):
    print("2")
elif (x <0 and y <0):
    print("3")
elif(x >0 and y>0 ):
    print("1")
elif(x>0 and y <0):
    print("4")
else :
    print("다시입력해주세요")
    
# ver2
print("3421"[input()>"0"::2][input()>"0"])
# 조건식 앞뒤 맞으면 맨뒤
# 조건식 앞만 맞으면 두번째
# 조건식 뒤만 맞으면 세번째
# 조건식 앞뒤 안맞으면 첫번째

# ver3
a,b=open(0);print('3421'[a>'0'::2][b>'0'])