#include <stdio.h>

int main()
{
    int y,m,d;
    printf("년도,월,일을 순서대로 / 를 이용하여 입력하시오: ");

    scanf("%d / %d / %d",&y,&m,&d);
    printf("%4d년 %2d월 %2d일",y,m,d);
    return 0;
}