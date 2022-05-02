#include <stdio.h>

// int a;
// int b;

int main()
{
    int a;
    int b;
    printf("2개의 숫자를 입력해보세요:");
    scanf("%d %d",&a,&b);
    int c = a+b;
    printf("%d ",c);
    return 0;
}