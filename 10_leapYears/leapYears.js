const leapYears = function(year) {
    if (year % 400 == 0) {
        return true;
    } else if (year % 100 == 0) {
        return false;
    } else if (year % 4 == 0) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;


//write a function that tells if a year is a leap year
//if divisible by 4 return true
//if divisible by 100 return false
//if divisible by 400 return true
//else return false 