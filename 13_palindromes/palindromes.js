const palindromes = function (str) {
   const chr = "abcdefghijklmnopqrstuvwxyz1234567890";
    const oldStr = str
        .toLowerCase()
        .split("")
        .filter((character) => chr.includes(character))
        .join("");
    const reverseStr = oldStr.split("").reverse().join("");
    return oldStr === reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
