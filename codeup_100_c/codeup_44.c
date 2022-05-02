#include <stdio.h>

int main()
{
    int a,b,c;
    printf("3개의 정수를 / 를 사용하여 입력하시오:");
    scanf("%d /%d /%d",&a,&b,&c);
    printf("3개의 합은 : %d\n 3개의 평균은 : %d",a+b+c,(a+b+c)/3);
    return 0;
}