a = int(input())

if ((a >=1 and a<3) or (a==12)):
    print("witner")
else:
    if (a >=3 and a<=5):
        print("spring")
    else:
        if (a >=6 and a<=8):
            print("summer")
        else:
            if(a>=9 and a<=11):
                print("fall")
            else:
                print("범위를 벗어났어요")