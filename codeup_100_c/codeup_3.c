#include <stdio.h>


int main()
{
    // 1번풀이
    // printf("Hello\n");
    // printf("World");
    // return 0;

    // 2번풀이
    // printf("Hello\nWorld");
    // return 0; 

    // 풀이
    // \n은 new line , \t 은 tab , \c는 carrige return

    // 3번풀이 (변수사용)

    char *a1 = "Hello"; // 문자열 포인터 선언
    char *b1 = "World";
    char c = '\n';
    // printf("%c",a1);
    printf("%s%c%s",a1,c,b1);
    return 0;
    
}