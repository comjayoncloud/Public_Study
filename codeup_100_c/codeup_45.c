#include <stdio.h>

int main()
{
    int a;
    printf("정수 1개를 입력하시오:");
    scanf("%d",&a);
    printf("받은 정수의 2배 값은 :%d 입니다",a<<1);
    return 0;
}