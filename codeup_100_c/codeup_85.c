#include <stdio.h>

int main()
{
    int a;
    int i,result;
    printf("숫자 하나를 입력하시오:");
    scanf("%d",&a); //57
    result = 0;
    for (i=1;i;i++)
    {
        result +=  i; // 1+2+3+4+5+6+7+9+10 
        if(result>=a){ // 57 >=57
            
            break;
        }     
    }

    printf("%d",result);
}