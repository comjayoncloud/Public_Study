
#include <stdio.h>
 
 
int main (void)
{
    
    int num1,num2;
    scanf("%d",&num1);
replay:
    scanf("%d",&num2);
    if(num1-- != 0){
        printf("%d\n",num2);
        goto replay;
        
    }
 
    
    
    return 0;
}