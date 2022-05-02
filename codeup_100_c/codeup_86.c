#include <stdio.h>

int main()
{
    int a,i;
    printf("숫자 한개를 입력하시오:");
    scanf("%d",&a);
    for(i=1;i<=a;i++)
    {
        if(i%2==0)
            continue;
        printf(" %d ",i);
    }
}