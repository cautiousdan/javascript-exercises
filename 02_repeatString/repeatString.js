let newPhrase = ""

const repeatString = function(phrase, times) {
    if (times < 0) {
        newPhrase = "ERROR";
        return newPhrase
    }
    newPhrase = "";
    for (let i = 0; i < times; i++) {
        newPhrase += phrase;
        
    }
    return newPhrase;
};

// Do not edit below this line
module.exports = repeatString;
