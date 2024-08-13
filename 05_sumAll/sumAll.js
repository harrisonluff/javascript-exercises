const sumAll = function(a, b) {
    function test(n) {
        if (!(typeof n == 'number')) {
            return false
        }
        if (n < 0) {
            return false
        }
        if (!(n == Math.floor(n))) {
            return false
        }
        return true
    };

    if (!test(a) || !test(b)) {
        return 'ERROR'
    }

    let low;
    let high;
    if (a <= b) {
        low = a;
        high = b;
    } else {
        low = b;
        high = a;
    }

    let sum = 0;
    for (let i=low; i<=high; i++) {
        sum += i;
    }
    return sum

};

// Do not edit below this line
module.exports = sumAll;
