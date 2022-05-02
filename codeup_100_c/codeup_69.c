#include <stdio.h>

int main()
{
    int a;

replay:
    printf("숫자를 입력하시오:");
    scanf("%d",&a);
    if(a !=0){
        printf("%d\n",a);
        goto replay;
    }

    return 0;
}