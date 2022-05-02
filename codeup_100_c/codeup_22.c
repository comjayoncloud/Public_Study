#include <stdio.h>

int main()
{
    char a[30];
    int i;
    printf("단어를 입력하세요:");

    scanf("%s",a);
    
    for(i=0;a[i];i++){
        printf("%c\n",a[i]);
    }
    
    return 0;
}