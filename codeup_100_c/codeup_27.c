#include <stdio.h>

int main()
{
    double a;
    printf("실수를 입력하시오:");
    scanf("%lf",&a);
    printf("%.11lf",a);

    return 0;
}