#include <stdio.h>

int main()
{
    int a,b,c;
    printf("숫자 2개를 입력하시오. 구분은 / 사용:");
    scanf("%d /%d",&a,&b);
    c = a+b;
    printf("합은 %d 입니다.",c);
    return 0;
}