h ,m = map(int,input().split())
total_min = ((h*60)+m-45)
if ( (h>=0 and h<=23) and (m>=0 and m<=60) ):
    if (h==0):
        total_min = int(24*60+m-45)
        a = int(total_min/60)
        b = total_min%60
        print(a,b)
    else :
        a = int(total_min/60)
        b = total_min%60
        print(a,b)
else :
    print("잘못된 숫자를 입력하셨습니다.다시 입력하세요")

# 왜틀린지 모르겠음.