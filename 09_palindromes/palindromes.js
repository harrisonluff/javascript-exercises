const palindromes = function (str) {
    alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";

    letters = str.toLowerCase().split('').filter(char => alphabet.includes(char));
    reversed = letters.slice().reverse();
    return letters.toString() == reversed.toString();
};

// Do not edit below this line
module.exports = palindromes;
