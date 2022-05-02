#include <stdio.h>

int main()
{
    char a,b;
    b = 'a';
    printf("%c",b); // 'a'
    printf("영문자 한개를 입력하시오:");
    scanf("%c",&a);
    do{

        printf("%c ",b); // 'a'
        b++; // b = 'b'
        a--; // a = 'e'
        
    }while(a>='a');

    return 0;

}

