#include <stdio.h>

int main()
{
    int a,b;

    
    printf("숫자 한개를 입력하시오:");
    scanf("%d",&a);

    for(b=0;b<a;b++)
    {
        printf("%d\n",b);
    }

    return 0;

}