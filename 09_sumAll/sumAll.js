const sumAll = function(min, max) {
    if (min < 0 || max < 0) {return "ERROR";}
    if (!Number.isInteger(min) || !Number.isInteger(max)) {return "ERROR";}
    let total = 0
    let start = Math.min(min, max);
    let end = Math.max(min, max);
    for (let i = start; i <= end; i++) {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;


// take 2 integers 
// return sum of every integer between and including them