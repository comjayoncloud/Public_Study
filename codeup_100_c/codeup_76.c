#include <stdio.h>

int main()
{
    int a,b;
    int c = 0;
    printf("정수 한개를 입력하시오:");
    scanf("%d",&a);
    for(b=1;b<=a;b++)
    {
        if(b%2==0)
        {
            c = c+b;
        }
    }
    printf("%d",c);
    return 0;

}