#include <stdio.h>

int main()
{
    float r,g,b;
    float result;
    printf("3숫자를 입력하시오:");
    scanf("%f %f %f",&r,&g,&b);
    b = b/8;
    r = r/1024;
    g = g/1024;
    result = r*g*b;
    printf("%.2f MB",result);
}