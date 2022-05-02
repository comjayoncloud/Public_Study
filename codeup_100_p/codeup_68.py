
a = int(input())

if (a>=90 and a<=100):
    print("A")
else : 
    if(a>=70 and a<90):
        print("B")
    else:
        if(a>=40 and a<70):
            print("C")
        else:
            if(a>=0 and a<40):
                print("D")
            else:
                print("범위를 벗어났습니다")

