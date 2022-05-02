#include <stdio.h>


int main()
{
    int h,m;
    printf("시,분을 3숫자로 연속으로 쓰십시요:");
    scanf("%d %2d",&h,&m);
    printf("%d hour %d min",h,m);
    return 0;

    // scanf("%d %2d",&h,&m);
    // printf("%d%2d",h,m);
    // return 0;

}