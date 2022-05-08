const ftoc = function(fah) {
  let newCel = (fah - 32) * 5/9
  return Number(newCel.toFixed(1))
};

const ctof = function(cel) {
  let newFah = (cel*9/5 + 32)
  return Number(newFah.toFixed(1))
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
