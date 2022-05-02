// #include <stdio.h>

// int main()
// {
//     int a,b,result;
//     printf("두 정수를 입력하시오:");
//     scanf("%d %d",&a,&b);
//     if (b>=a){
//         printf("1");
//     }
//     printf("0");

//     return 0;
// }

 

#include <stdio.h>
 
 
int main (void)
{
    int num1,num2,result;
 
    
    scanf("%d %d", &num1, &num2);
    result = num1<=num2;
    
    printf("%d",result);
 
    
    return 0;
}