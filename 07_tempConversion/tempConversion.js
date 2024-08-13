const convertToCelsius = function(temp) {
  outTemp = (temp-32)*(5/9);
  return Math.round(outTemp * 10) / 10
};

const convertToFahrenheit = function(temp) {
  outTemp = (temp*9/5)+32;
  return Math.round(outTemp * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
