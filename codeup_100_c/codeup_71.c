#include <stdio.h>

int main()
{
    int a;
    printf("숫자를 입력하시오:");
    scanf("%d",&a);

    while(a!=0)
    {
        printf("숫자를 입력하시오:");
        scanf("%d",&a);
    }
    return 0;
}