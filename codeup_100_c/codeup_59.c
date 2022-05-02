#include <stdio.h>

int main(){

    int a,b,c; 
    printf("정수 두개를 입력하시오:");
    scanf("%d %d",&a,&b);

    c = a|b ;
    printf("%d",c); 
}