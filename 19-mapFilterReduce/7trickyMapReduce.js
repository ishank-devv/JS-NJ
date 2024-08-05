//Data coming from API- list of users
const users = [
  { firstName: "ishu", lastName: "sharma", age: 26 },
  { firstName: "vishu", lastName: "sharma", age: 21 },
  { firstName: "elon", lastName: "musk", age: 26 },
  { firstName: "jeff", lastName: "bezos", age: 54 },
];

//eg1- Map
//list of full names
//["ishu sharma","vishu sharma"]
//x -> first item of users(ie. 1st obj-> { firstName: "ishu", lastName: "sharma", age: 20 } )
const outputMap = users.map((x) => x.firstName + " " + x.lastName);
console.log(outputMap);

//eg2- reduce
//{ 26 : 2, 75 : 1, 50 : 1}
// acc-> initial value -> {} ie.empty obj
// curr-> first item of users(ie. 1st obj-> { firstName: "ishu", lastName: "sharma", age: 20 },)
const outputReduce = users.reduce(function (acc, curr) {
  //if 26 already exist in acc
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  }
  //if 26 does not exist in acc
  else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});
console.log(outputReduce);
