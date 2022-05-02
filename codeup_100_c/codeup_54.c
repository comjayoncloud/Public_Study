#include <stdio.h>

int main ()
{
    int a,b,c;
    printf("두 정수를 입력하시오:");
    scanf("%d %d",&a,&b);
    c = (a&&!b)||(!a&&b);
    printf("%d",c);
    return 0 ;
}