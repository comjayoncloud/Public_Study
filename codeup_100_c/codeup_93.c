#include <stdio.h>

int main()
{
    int a,i;
    int b[10000];
    int c = 100;
    scanf("%d",&a);
    for(i=1;i<=a;i++)
    {
        scanf("%d",&b[i]);
        if(c >b[i])
        {
            c = b[i];
        }
    }
    printf("%d",c);

    return 0;
}