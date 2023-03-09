const getTheTitles = function(a) {
    titleList = []
    a.forEach(element => {
        titleList.push(element.title);
    });
    return titleList
};

// Do not edit below this line
module.exports = getTheTitles;
