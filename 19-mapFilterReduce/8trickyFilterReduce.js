//Data coming from API- list of users
const users = [
  { firstName: "ishu", lastName: "sharma", age: 26 },
  { firstName: "nishant", lastName: "sharma", age: 75 },
  { firstName: "elon", lastName: "musk", age: 26 },
  { firstName: "jeff", lastName: "bezos", age: 54 },
];

const aboveThirty = users.filter((x) => x.age > 30);
console.log(aboveThirty);

const firstNames = aboveThirty.map((x) => x.firstName);
console.log(firstNames);

//chaining filter and map- firstname of people age less than 30
const finalOutput = users.filter((x) => x.age < 30).map((x) => x.firstName);
console.log(finalOutput);

//using reduce- firstname of people age less than 30(filter.map)
const reduceOutput = users.reduce((acc, curr) => {
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);
console.log(reduceOutput);
