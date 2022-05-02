num = int(input())

count = 1
stack = []
result = []
for _ in range(num):
    data = int(input())
    while count <= data:
        stack.append(count)
        count += 1
        result.append('+')
    if stack[-1] == data:
        stack.pop()
        result.append('-')
    else:
        print("No")
        exit(0)

print('\n'.join(result))