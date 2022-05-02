#include <stdio.h>

int main()
{
    int a,arr[10000] = {}; // 받을 인트 a와 배열 arr[10000] 선언 및 초기화
    scanf ("%d",&a);       // 받을 숫자 10개.
    for(int i=0;i<a;i++)   // 배열 [0]~[9] 까지 순서대로 진행.
    {
        scanf("%d",&arr[i]); // 받은 숫자들 앞부터 순서대로 저장.
    }
    for(int i=a-1; i>=0;i--) // 9부터 시작(뒤) 시작 0(앞) 까지.
    {
        printf("%d ",arr[i]); // 출력.
    }
    return 0;


}