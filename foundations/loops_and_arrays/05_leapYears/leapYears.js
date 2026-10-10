const leapYears = function(years) {
  const YearFour = years % 4 === 0;
  const Century = years % 100 === 0;
  const ourHundredYears = years % 400 === 0;

  if (
    YearFour &&
    (!Century || ourHundredYears)
  ) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
