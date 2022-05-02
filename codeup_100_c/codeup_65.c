#include <stdio.h>

int main()
{
    int a;
    printf("정수 한개를 입력하시오:");
    scanf("%d",&a);

    if(a>0){
        printf("plus\n");
    }
    else printf("minus\n");

    if(a%2==0){
        printf("even\n");
    }
    else printf("odd\n");



    return 0;
}