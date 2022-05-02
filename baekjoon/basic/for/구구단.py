num = int(input())

if ( num >=1 and num <=9):
    for i in range(1,10):
        print(num, "*", i, "=" ,i*num)
else :
    print("잘못된 숫자를 입력했습니다.다시 입력하시오")