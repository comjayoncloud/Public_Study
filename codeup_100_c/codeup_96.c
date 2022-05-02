#include <stdio.h>

int main()
{
    int i,j,h,w,n,l,d,x,y;
    int map[101][101]={}; // 0~100,0~100 2차원배열 선언 후 0으로 초기화
    scanf("%d %d",&h,&w);
    scanf("%d",&n);
    for(i=1;i<=n;i++)
    {
        scanf("%d %d %d %d",&l,&d,&x,&y);
        if(d==0) // 가로
        {
            for(j=0;j<l;j++)
            {
                map[x][y+j]=1;
            }
        }    
        else    // 세로
        {
            for(j=0;j<l;j++)
            {
                map[x+j][y]=1;
            }
        } 
    }

    for(i=1;i<=h;i++)
    {
        for(j=1;j<=w;j++)
            printf("%d ",map[i][j]);    
        printf("\n");
    }
    return 0;
}