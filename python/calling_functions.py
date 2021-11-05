"""
Demonstration of how to call functions
"""

# Function  that we can call
def useless(input1, input2, input3):
    """
    This Function takes three arguments and always returs 3
    """
    return 3

# calling the function
useless(1, 2, 3)

# calling the function and printing the result
print(useless(1,2,3))

# calling the function and assigning the result to a variable
result = useless(1,2,3)
print(result)

# you must pass the right number of arguments
# useless()
# useless(1)
# useless(1,2)
useless(1,2,3)
