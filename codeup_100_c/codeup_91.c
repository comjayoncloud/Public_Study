#include <stdio.h>

int main()
{
    int arr[24] = {};

    int num;
    int num2;
    scanf("%d",&num);

    for (int i=1;i<=num;i++) // 10번 입력할수있음.
    {
        scanf("%d",&num2);  // 
        arr[num2]+=1;       // 배열의 인덱스 증가.
        // arr[1] = 1
    }
    for (int j=1;j<24;j++)
    {
        printf("%d ",arr[j]);
    }
    return 0;
}

