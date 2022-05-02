# ver1 for문

a,d,n = map(int,input().split())
result = a
for i in range(n-1):
    result += d

print(result)


# ver2 while문

a,d,n = map(int,input().split())
i,result = 1,a
while (i<n):
    result += d
    i +=1
print(result)

# ver3 등차수열 공식
a,d,n = map(int,input().split())
print (a+d*(n-1))

#  반복문 사용 시 주의할 점.
#    - 등차수열은 a, a+d, a+d+d 로 증가한다.

#       => while문에서 i = 1, for문에서 range(n-1)인 이유이다.

#       => 초깃값이 a이므로, 첫번째 반복문에서는 d가 더해지지 않음 (반복문이 n이 아닌 n-1번 반복해야함)