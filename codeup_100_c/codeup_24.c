#include <stdio.h>

int main()
{
    int h,m,s;
    printf("시분초를 :를 기준으로 나누어 입력하세요:");
    scanf("%2d:%2d:%2d",&h,&m,&s);
    printf("%02d분",m);
    return 0;
}