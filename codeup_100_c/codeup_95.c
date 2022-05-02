#include <stdio.h>

int main()
{
    int arr[20][20]={}; // 2차원 배열 선언 후 0으로 초기화
    int n,i,j,x,y; 
    
    for(i=1;i<=19;i++) // 2차원 배열에 숫자 넣기.
        for(j=1;j<=19;j++)
            scanf("%d",&arr[i][j]);
    
    scanf("%d",&n); 

    for(i=1;i<=n;i++){ 
        scanf("%d %d",&x,&y);
        for(j=1;j<=19;j++) // 가로축 바꾸기.
        {     
            if(arr[x][j]==0)
                arr[x][j]=1;
            else arr[x][j]=0;
        }
        for(j=1;j<=19;j++) // 세로축 바꾸기
        {     
            if(arr[j][y]==0)
                arr[j][y]=1;
            else arr[j][y]=0;
        }
    }
    
    for(i=1;i<=19;i++)    // 출력
    {    
        for(j=1;j<=19;j++)
            printf("%d ",arr[i][j]);
        printf("\n");
    }
    return 0;   
}