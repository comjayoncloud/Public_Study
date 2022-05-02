num = int(input())
a,i = 0,1
if (num >=1 and num<=10000):
    for i in range(num+1):
        a += i
        i+=1
    print(a)
else :
    print("숫자를 다시 입력하시오")