#include <stdio.h>

int main(){
    int a,b,c;


    printf(" 숫자 3개를 입력하시오(시작값,등차의값 ,몇번째 수인지) : ");
    scanf("%d %d %d",&a,&b,&c);

    for (int i=1;i<c;i++) // 횟수
    {
        a *= b; 
    }
    printf("%d",a);
    
}