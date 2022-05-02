#include <stdio.h>

int main()
{
    int a,b;
    int c,d;
    printf("두 정수를 입력하시오:");
    scanf("%d %d",&a,&b);

    for(c=1;c<=a;c++)
    {
        for(d=1;d<=b;d++)
        printf("%d %d\n",c,d);
    }
    return 0;
}