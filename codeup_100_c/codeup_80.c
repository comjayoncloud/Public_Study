#include <stdio.h>

int main()
{
    int a,b,c;
    printf("대문자 A~F중 한개를 입력하시오:");
    scanf("%X",&a);
    for(b=1;b<=15;b++)
    {
        c = b*a;
        printf("%X\n",c);
    }
    return 0;

}