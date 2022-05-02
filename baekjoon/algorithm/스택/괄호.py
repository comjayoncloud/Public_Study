num = int(input())
for i in range(num):
    a = input()
    ls = list(a)
    sum = 0 
    for i in ls:
        if (i =='('):
            sum +=1
        elif (i ==')'):
            sum -=1
        if (sum<0):
            print("No")
            break
    
    if (sum >0):
        print("No")
    elif (sum == 0):
        print("Yes")

a = int(input())
for i in range(a):
    b = input()
    s = list(b)
    sum = 0
    for i in s:
        if i == '(':
            sum += 1
        elif i == ')':
            sum -= 1
        if sum < 0:
            print('NO')
            break
    if sum > 0:
        print('NO')
    elif sum == 0:
        print('YES')