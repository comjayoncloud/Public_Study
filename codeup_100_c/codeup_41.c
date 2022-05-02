#include <stdio.h>

int main()
{
    int a,b,c;
    printf("정수 2개를 /로 구분하여 입력하시오:");
    scanf("%d / %d",&a,&b);
    
    c = a%b;
    printf(" 나머지는 %d 입니다",c);
    return 0;

}