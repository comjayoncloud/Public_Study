#include <stdio.h>

int main()
{
    int a,b;

    printf("주민번호를 입력하세요. ex)921215-1111111:");
    scanf("%d-%d",&a,&b);
    printf("%d-%d",b,a);

    return 0;
}