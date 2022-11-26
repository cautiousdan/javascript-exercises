const convertToCelsius = function(originalFahrenheit) {
  let newCelsius = (originalFahrenheit - 32) * .5556;
  newCelsius = Number(newCelsius.toFixed(1));
  return newCelsius;
};

const convertToFahrenheit = function(originalCelsius) {
  let newFahrenheit = originalCelsius * 1.8 + 32
  newFahrenheit = Number(newFahrenheit.toFixed(1));
  return newFahrenheit
};

//To convert temperatures in degrees Fahrenheit to Celsius, subtract 32 and multiply by .5556 (or 5/9).
//To convert temperatures in degrees Celsius to Fahrenheit, multiply by 1.8 (or 9/5) and add 32.


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
