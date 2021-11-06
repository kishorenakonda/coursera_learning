def find_value(p, q):
    return not ( p or not q)

print(find_value(True, True))
print(find_value(True, False))
print(find_value(False, True))
print(find_value(False, False))

def f(n):
    return n // 2 if n % 2 == 0 else 3*n + 1

print("function", f(674))