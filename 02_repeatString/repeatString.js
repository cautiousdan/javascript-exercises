let newPhrase = ""

const repeatString = function(phrase, times) {
    newPhrase = "";
    for (let i = 0; i < times; i++) {
        newPhrase += phrase;
        
    }
    return newPhrase;
};

// Do not edit below this line
module.exports = repeatString;
