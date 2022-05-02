#include <stdio.h>

int main()
{
    int a,b,c;
    c=0;
    printf("숫자 1개를 입력하세요!:");
    scanf("%d",&a);
    while(1){
        c++;
        b+=c;
        if(b>=a){break;}
    }
    printf("%d",c);
    return 0;
}