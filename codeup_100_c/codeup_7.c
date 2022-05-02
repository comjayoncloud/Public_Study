// 윈도우 운영체제의 파일 경로를 출력하는 연습을 해보자.
 
// 파일 경로에는 특수문자들이 포함된다.
// 다음 경로를 출력하시오.
// "C:\Download\hello.cpp"

#include <stdio.h>

int main()
{
    char a[5][10] = {"\"C:","\\","Download","\\","hello.cpp\""};

    printf("%s%s%s%s%s",a[0],a[1],a[2],a[3],a[4]);
    return 0;
}