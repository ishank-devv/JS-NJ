const radius = [3, 1, 2, 4];

//area
const area = function (radius) {
  return Math.PI * radius * radius;
};

//map-pollyfil(kind of like a pollyfil for map)
Array.prototype.calculate = function (logic) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};
console.log(radius.calculate(area));

console.log(radius.map(area));
