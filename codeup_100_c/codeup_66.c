#include <stdio.h>

int main()
{
    int a;
    printf("정수 한개를 입력하시오:");
    scanf("%d",&a);

    if (a >=90){
        printf("A");
    }
    else if(a>=70){
        printf("B");
    }
    else if(a>=40){
        printf("C");
    }
    else {
        printf("D");
    }
    return 0;

}