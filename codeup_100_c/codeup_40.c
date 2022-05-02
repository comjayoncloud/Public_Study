#include <stdio.h>

int main()
{
    int a,b,c;
    printf("정수 2개를 /로 구분하여 입력하시오:");
    scanf("%d / %d",&a,&b);
    
    c = (int)a/b;
    printf(" 나눈값은 %d 입니다",c);
    return 0;

}