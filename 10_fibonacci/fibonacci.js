const fibonacci = function(targetNum) {
    if (typeof targetNum === 'string') {
        targetNum = parseInt(targetNum, 10)
    }
    if (targetNum < 1) {
        return "OOPS"
    }
    if (targetNum === 1) {
        return 1
    }
    let currentNum = 1
    let numberA = 0
    let numberB = 1
    let newNumberA = 0
    let newNumberB = 0
    let newSum = 0
    while (currentNum < targetNum) {
        newSum = numberA + numberB
        newNumberB = newSum
        newNumberA = numberB
        numberB = newNumberB
        numberA = newNumberA
        currentNum++
    }
    return newSum
};

// Do not edit below this line
module.exports = fibonacci;
