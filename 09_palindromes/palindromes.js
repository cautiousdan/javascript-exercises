const palindromes = function (a) {
    let inboundString = a;
    inboundString = inboundString.toLowerCase();
    inboundString = inboundString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    inboundString = inboundString.replace(/\s/g, '');
    if (inboundString == inboundString.split('').reverse().join('')) {
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
