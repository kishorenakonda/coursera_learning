"""
Implementing RPSLS for Practice Project
"""

def name_to_number(name):
    """
    Take string name as input (rock-spock-paper-lizard-scissors)
    and returns integer (0-1-2-3-4)
    """
    nameList = dict()
    nameList['rock'] = 0
    nameList['spock'] = 1
    nameList['paper'] = 2
    nameList['lizard'] = 3
    # nameList['scissors'] = 4  
    if name is not None and nameList[name]:
        return nameList[name]
    else:
        return None

print(name_to_number("rock"))       # output - 0
print(name_to_number("spock"))      # output - 1
print(name_to_number("paper"))      # output - 2
print(name_to_number("lizard"))     # output - 3
# print(name_to_number("scissors"))   # output - 4