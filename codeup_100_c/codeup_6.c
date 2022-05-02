#include <stdio.h>


int main()
{

    // 초간단
    // printf("!@#$%^&*()");

    //배열형 문자열 선언
    
    char a1[] = "!@#$%^&*()";
    
    printf("%s\n",a1);
    printf("%c\n",a1[0]);
    printf("%c\n",a1[1]);
    return 0;
}

// int main()
// {
//     char s1[10] = "Hello";     // 크기가 10인 char형 배열 선언
    
//     // s1 = "Hello";    // 이미 선언된 배열에 문자열을 할당하면 컴파일 에러 발생

//     printf("%s\n", s1);    // Hello: %s로 문자열 출력

//     return 0;
// }