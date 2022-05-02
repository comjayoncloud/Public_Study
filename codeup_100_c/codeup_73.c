#include <stdio.h>

int main(){
    int a;
    printf("숫자 한개를 입력하시오:");
    scanf("%d",&a);
    while(a!=0)
    {
        a--;
        printf("%d\n",a);
        
    }
    
    return 0;
}