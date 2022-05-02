#include <stdio.h>

int main()
{
    float a;
    int b;
    printf("실수를 입력하세요:");
    scanf("%f",&a);
    printf("%f\n",a);
    b = (int)a;
    printf("정수:%d \n",b);
    printf("실수:%f",(a-b));
    return 0;

}