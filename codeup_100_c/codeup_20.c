#include <stdio.h>

int main()
{
    char a[11];
    printf("Hello World를 공백을 포함하여 입력하시오:");
    scanf("%11s",a);
    printf("%s",a);

    return 0;
}