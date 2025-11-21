const fibonacci = function(num) {
    let count 
    if (typeof num !== "number") {
        count = parseInt(num);
    } else {
        count = num;
    };
    if (count < 0) {return "OOPS";};
    if (count == 0) {return 0;};

    let current = 1;
    let previous = 0;

    for (let i = 2; i <= count; i++) {
        let newNum = current + previous;
        previous = current;
        current = newNum;
    };

    return current;
};

// Do not edit below this line
module.exports = fibonacci;
