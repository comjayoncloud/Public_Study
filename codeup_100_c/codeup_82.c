#include <stdio.h>

int main()
{
    int a,b,c;
    printf("빛의 개수를 입력하시오:");
    int d,e,f;
    int result=0;
    scanf("%d %d %d",&a,&b,&c);
    for (d=0;d<a;d++)
        for (e=0;e<b;e++)
            for (f=0;f<c;f++)
            {
                printf("%d %d %d\n",d,e,f);
                result++;
            }
    printf("총 표현할수 있는 가짓수는 :%d",result);
    return 0;
}