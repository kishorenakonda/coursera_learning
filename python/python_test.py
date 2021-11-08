"""
Python Test
"""
import datetime

def days_in_month(year, month):
    """
    Inputs:
      year  - an integer between datetime.MINYEAR and datetime.MAXYEAR
              representing the year
      month - an integer between 1 and 12 representing the month
      
    Returns:
      The number of days in the input month.
    """
    date = datetime.datetime(year,month,1)
    previous_date = date.replace(month = date.month % 12 + 1, day = 1)
    delta_time = datetime.timedelta(days=1)
    total_number_of_days = (previous_date - delta_time).day
    return total_number_of_days

print(days_in_month(2021, 11))

def is_valid_date(year, month, day):
    """
    Inputs:
      year  - an integer representing the year
      month - an integer representing the month
      day   - an integer representing the day
      
    Returns:
      True if year-month-day is a valid date and
      False otherwise
    """
    valid_date = False
    is_min_year =  year >= datetime.MINYEAR
    is_max_year = year <= datetime.MAXYEAR
    is_min_month = month >= 1
    is_max_month = month <= 12
    is_min_day = day >= 1
    is_max_day = day <= 31
    is_valid_year = is_min_year and is_max_year
    is_valid_month = is_min_month and is_max_month
    is_valid_day = is_min_day and is_max_day
    
    if is_valid_year and is_valid_month and is_valid_day:
        no_of_days_for_a_month = days_in_month(year, month)
        if day <= no_of_days_for_a_month:
            valid_date = True

    return valid_date

print(is_valid_date(1400, 1, 0))

def days_between(year1, month1, day1, year2, month2, day2):
    """
    Inputs:
      year1  - an integer representing the year of the first date
      month1 - an integer representing the month of the first date
      day1   - an integer representing the day of the first date
      year2  - an integer representing the year of the second date
      month2 - an integer representing the month of the second date
      day2   - an integer representing the day of the second date
      
    Returns:
      The number of days from the first date to the second date.
      Returns 0 if either date is invalid or the second date is 
      before the first date.
    """
    is_valid_date1 = is_valid_date(year1, month1, day1)
    is_valid_date2 = is_valid_date(year2, month2, day2)
    if(is_valid_date1 is True and is_valid_date2 is True):
        date1 = datetime.date(year1, month1, day1)
        date2 = datetime.date(year2, month2, day2)
        if date2 < date1:
            return 0
        else:
            diff = date2 - date1
            return diff.days
    else:
        return 0

print(days_between(2021, 10, 1, 2021, 11, 1))

def age_in_days(year, month, day):
    """
    Inputs:
      year  - an integer representing the birthday year
      month - an integer representing the birthday month
      day   - an integer representing the birthday day
      
    Returns:
      The age of a person with the input birthday as of today.
      Returns 0 if the input date is invalid of if the input
      date is in the future.
    """
    is_valid_date_for_birthday = is_valid_date(year, month, day)
    if is_valid_date_for_birthday is True:
        current_date = datetime.date.today()
        birthday = datetime.date(year, month, day)
        if birthday <= current_date:
            age_of_user_indays = \
            days_between(year, month, day, current_date.year, current_date.month, current_date.day)
            return age_of_user_indays
        else:
            return 0
    else:
        return 0
    

print(age_in_days(1997, 9, 23))