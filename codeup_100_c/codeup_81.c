#include <stdio.h>

int main()
{
    int a;
    printf("1~9중 한숫자를 입력하시오:");
    scanf("%d",&a);
    for (int i=1;i<=a;i++)
    {
        if (i%3==0)
        {
            printf("X ");
        }
        else printf("%d ",i);
    }
    return 0;
}