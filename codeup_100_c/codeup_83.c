#include <stdio.h>

int main(){
    float h,b,c,s;
    float mb;
    printf(" 입력하시오 :");
    scanf("%f %f %f %f",&h,&b,&c,&s);
    mb = (h*b*c*s) / 8 / 1024 / 1024;

    printf("%.1f MB",mb);
}