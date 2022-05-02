num = int(input())

stack = []
for i in range(num):
    command = int(input())

    if (command == 0 ):
        stack.pop()
    else:
        stack.append(command)

print(sum(stack))