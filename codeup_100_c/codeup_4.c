#include <stdio.h>

int main()
{
    // 방법1 문자열 포인터만 사용
    // char *a = "Hello";
    // char *b = "\'";
    // printf("%s%s%s",b,a,b); 
    // return 0;

    // 방법2 문자열 포인터 + 그냥 사용
    char *a = "Hello";
    printf("%s%s%s","\'",a,"\'");
    
    
    return 0 ;

}