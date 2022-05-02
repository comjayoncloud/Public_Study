
# N = int(input())
# stack = []
# for i in range(N):
#     command = input().split()

#     if command[0] == 'push':
#         stack.append(command[0])

import sys
n = int(sys.stdin.readline())

stack = []

for i in range(n):
    command = sys.stdin.readline().split()

    if command[0] == 'push':
        stack.append(command[1])
        print(*stack)
        print(*command)
    
    elif command[0] == 'pop':
        if len(stack)==0:
            print(-1)
        else:
            print(stack.pop())
            print(stack)
    elif command[0] == 'size':
        print(len(stack))
        print(stack)
    elif command[0] == 'empty':
        if len(stack)==0:
            print(1)
            print(stack)
        else:
            print(0)
            print(stack)
    elif command[0] == 'top':
        top = stack[-1]
        print(top)
        print(stack) 