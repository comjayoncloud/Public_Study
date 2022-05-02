#include <stdio.h>

int main(){
    int a,b,c,d;


    printf(" 숫자 4개를 입력하시오(시작값,곱할값,더할값,몇번째 수인지) : ");
    scanf("%d %d %d %d",&a,&b,&c,&d);

    for (int i=1;i<d;i++) // 횟수
    {
        a = (a*b)+c; 
    }
    printf("%d",a);
    
}