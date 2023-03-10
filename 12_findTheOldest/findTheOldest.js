const findTheOldest = function(a) {
    let oldestPerson = {}
    let oldestPersonAge = 1
    let currentAge = 0
    a.forEach(element => {
        currentAge = GetCurrentAge(element)

        if (currentAge > oldestPersonAge) {
            oldestPersonAge = currentAge
            oldestPerson = {}
            oldestPerson = element
        }
    })
    return oldestPerson
};

function GetCurrentAge(person) {
    let date = new Date().getFullYear();
    if ("yearOfDeath" in person) {
        return person.yearOfDeath - person.yearOfBirth;
    }
    if ("yearOfDeath" in person === false) {
        return date - person.yearOfBirth;
    }
    return
}

// Do not edit below this line
module.exports = findTheOldest;
