#include <stdio.h>

int main()
{
    char a;
    printf("A,B,C,D..알파벳 한 문자를 입력하시오:");
    scanf("%c",&a);
    switch(a)
    {
    case 'A':
        printf("best!!");
        break;

    case 'B':
        printf("good!!");
        break;
    case 'C':
        printf("run!");
        break;
    case 'D':
        printf("slowly~");
        break;
    default:
        printf("what?");
        break;
    }

}