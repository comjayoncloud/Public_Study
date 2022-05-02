#include <stdio.h>

int main(){

    int a,b; 
    printf("정수를 입력하시오:");
    scanf("%d",&a);
    b = ~a;
    printf("%d",b);
}