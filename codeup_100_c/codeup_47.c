#include<stdio.h>

int main()
{
    int a,b;
    printf("두 정수를 입력하시오:");
    scanf("%d/%d",&a,&b);

    if(a>b){
        printf("1");
        return 0;
    }
    printf("0");

}