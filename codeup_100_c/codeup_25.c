#include <stdio.h>

int main()
{
    
    int y,m,d;
    printf("년도,월,일을 .를 기준으로 입력하시오:");
    scanf("%d %d %d",&y,&m,&d);
    printf("%04d-%02d-%02d",d,m,y);

    return 0;

}