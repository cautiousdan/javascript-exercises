const removeFromArray = function(...args) {
    let array = args[0];
    let newArray = [];
    
    array.forEach((item) => {
        if (!args.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
};
// Do not edit below this line
module.exports = removeFromArray;

/*

    let i = 0;
    const targetLength = removeTargets.length;
    while (i < targetLength) {
        spliced = inputArray.splice(removeTargets[i] - 1, removeTargets[i] - 1);
        i++
    }
    outputArray = inputArray;
*/