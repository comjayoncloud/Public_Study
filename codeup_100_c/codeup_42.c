#include <stdio.h>

int main()
{
    long long int a,b;
    printf("정수 1개를 입력하시오:");
    scanf("%lld",&a);
    
    b = ++a;
    printf("+1를 한숫자는 %lld 입니다",b);
    return 0;

}