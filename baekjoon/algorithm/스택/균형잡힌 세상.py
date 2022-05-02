a = list(input())

sum1 = 0 # 소괄호
sum2 = 0 # 대괄호


for i in a:
    if i == '(':
        sum1 +=1
    elif i == ')':
        sum1 -=1
    elif i == '[':
        sum2 +=1
    elif i == ']':
        sum2 -=1
    if sum1 <0 or sum2<0 :
        print("No")
    
if sum1 >0 or sum2>0:
    print("No")
elif sum1 == 0 and sum2 == 0:
    print("Yes")