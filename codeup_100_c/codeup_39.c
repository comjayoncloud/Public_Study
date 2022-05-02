#include <stdio.h>

int main()
{
    char a;
    int b;
    printf("영문자 1개를 입력하시오:");
    scanf("%c",&a);
    b = (int)a+1;
    printf(" 다음 영문자는 %c 입니다",b);
    
    return 0;
}