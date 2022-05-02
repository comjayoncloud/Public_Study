#include <stdio.h>

int main()
{
    long long int a,b,c;
    printf("정수 두개를 /를 사용하여 입력하시오:");
    scanf("%d / %d",&a,&b);
    c = a+b;
    printf(" 합은 %lld 입니다.",c);


    return 0;
}