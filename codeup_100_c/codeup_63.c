#include <stdio.h>

int main()
{
    int a,b,c;
    printf("정수 세개를 입력하시오:");
    scanf("%d %d %d",&a,&b,&c);

    if(a%2==0)
    {
        printf("%d\n",a);
    }

    if(b%2==0)
    {
        printf("%d\n",b);
    }
    if(c%2==0)
    {
        printf("%d\n",c);
    }
    return 0;
}