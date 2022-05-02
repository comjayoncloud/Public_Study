#include <stdio.h>

int main()
{
    int a,b,c;
    printf("세 숫자를 입력하시오:");
    scanf("%d %d %d",&a,&b,&c);
    int day=1;
    while(day%a!=0 || day%b!=0 || day%c!=0) 
        day++;
        printf("%d", day);
    return 0;
}