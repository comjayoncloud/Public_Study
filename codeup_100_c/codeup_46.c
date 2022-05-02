#include <stdio.h>

int main()
{
    int a,b;
    printf("정수 2(a,b)개를 /를 사용하여 입력하시오:");
    scanf("%d/%d",&a,&b);

    printf("a의 2b배승은 %d 입니다",a<<b);
    return 0;
}