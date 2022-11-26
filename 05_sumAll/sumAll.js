const sumAll = function(inputOne, inputTwo) {
    let calcTop = 0;
    let calcBottom = 0;
    if (inputOne < 0 || inputTwo < 0 || typeof inputOne != 'number' || typeof inputTwo != 'number') {
        return "ERROR"
    } 
    if (inputOne > inputTwo) {
        calcBottom = inputTwo;
        calcTop = inputOne;
    } else if (inputTwo > inputOne) {
        calcBottom = inputOne;
        calcTop = inputTwo;
    } else {
        console.log("Something went wrong with inputs.")
    }
    let difference = calcTop - calcBottom;
    let sum = 0;
    while (difference >= 0) {
        sum += calcBottom;
        calcBottom++;
        difference--;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
