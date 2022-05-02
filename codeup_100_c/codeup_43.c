#include <stdio.h>

int main()
{
    int a,b;
    printf("정수 2개를 /를 사용하여 입력하시오:");
    scanf("%d / %d",&a,&b);
    printf(" 합:%d\n 차:%d\n 곱:%d\n 나머지:%d\n 나누기:%d\n 실수값포함나누기:%.2f\n",a+b,a-b,a*b,a%b,a/b,(float)a/(float)b);

}