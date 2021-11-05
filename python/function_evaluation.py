"""
Define points (x0, y0) and (x1,y1)
"""

x_0, y_0 = 2,2
x_1, y_1 = 5,6

print("First Point is", x_0, y_0)
print("Second point is", x_1, y_1)

"""
Compute Distance between two points
"""
def point_distance(x0, y0, x1, y1):
    """
    Return distance between two points (x0, y0) and (x1, y1)
    """
    x_dist = x0 - x1
    y_dist = y0 - y1
    return (x_dist ** 2 + y_dist ** 2) ** 0.5

# compute distance between (2,2) and (5,6) which should return 5.0
x0, y0 = 2, 2
x1, y1 = 5, 6

print(point_distance(x0,y0, x1,y1))

def project_to_distance(point_x, point_y, distance):
    dist_to_origin = (point_x ** 2 + point_y ** 2) ** 0.5
    scale = distance / dist_to_origin
    print ("project_to_disatace $", point_x * scale, point_y * scale)

project_to_distance(2, 7, 4)

def do_stuff():
    """
    Example of print vs. return
    """
    print("Hello world")
    return "Is it over yet?"
    print("Goodbye cruel world!")

print(do_stuff())

def math_fun(x):
    value = -5 * pow(x, 5) + 67 * pow(x,2) - 47
    return value

print(math_fun(0))
print(math_fun(1))
print(math_fun(2))
print(math_fun(3))
print("")

def future_value(present_value, annual_rate, periods_per_year, years):
    """
    Input: the numbers present_value, annual_rate, periods_per_year, years
    Output: future value based on formula given in question
    """
    rate_per_period = annual_rate / periods_per_year
    periods = periods_per_year * years

    # Put your code here.
    value_pow_period = pow((1 + rate_per_period), periods)
    future_value = present_value * value_pow_period
    return future_value
    

print("$1000 at 2% compounded daily for 4 years yields $", future_value(1000, .02, 365, 4))
# print("futurevalue $", future_value(500, .04, 10, 10))

def area_of_equ_triangle(side_value):
    area = ( 1.73 * side_value * side_value) / 4
    return area

print(area_of_equ_triangle(2))
print(area_of_equ_triangle(5))