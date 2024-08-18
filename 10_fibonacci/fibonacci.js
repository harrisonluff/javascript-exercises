const fibonacci = function(n) {
    if (n < 0) return 'OOPS';
    if (n == 0) return 0;

    a = 1; //current
    b = 0; //last

    for (let i=0; i<n-1; i++) {
        [a, b] = [a+b, a];
    }
    return a;
};

// Do not edit below this line
module.exports = fibonacci;
