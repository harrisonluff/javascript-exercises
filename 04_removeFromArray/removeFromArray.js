const removeFromArray = function(arr, ...items) {
    for (const item of items) {
        for (let i=arr.length-1; i>=0; i--) {
            if (arr[i] === item) arr.splice(i,1);
        }
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
