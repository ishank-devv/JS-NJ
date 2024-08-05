//functional programming- Higher Order Function, First Class Function
//with DRY- with help of generic function
const radius = [3, 1, 2, 4];

//area
const area = function (radius) {
  return Math.PI * radius * radius;
};

//circumference
const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

//Diameter
const diameter = function (radius) {
  return 2 * radius;
};

//Generic function- DRY
const calculate = function (radius, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};
console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));

//using map- internal function
console.log(radius.map(area));
