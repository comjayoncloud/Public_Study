#include <stdio.h>

int main()
{
    int arr[20][20]={};
    int a,x,y,i,j;
    scanf("%d",&a);
    for (i=1;i<=a;i++)
    {
        scanf("%d %d",&x,&y);
        arr[x][y]=1;
    }
    for(i=1;i<=19;i++)
    {
        for(j=1;j<=19;j++)
        {
            printf("%d ",arr[i][j]);
        }
        printf("\n");
    }
    return 0;
}