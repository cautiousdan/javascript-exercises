const reverseString = function(inputString) {
    let finishedString = "";
    for (let i = 0; i < inputString.length; i++) {
        finishedString = inputString.substr(i, 1) + finishedString;
        }
    return finishedString;
};

// Do not edit below this line
module.exports = reverseString;
