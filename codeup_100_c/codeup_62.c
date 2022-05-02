#include <stdio.h>

int main(){
    int a,b,c,d;
    printf("세 정수를 입력하시오:");
    scanf("%d %d %d",&a,&b,&c);
    d = a < b ? a:b;
    d = d < c ? d:c;
    printf("%d",d);
    
    return 0 ;
}