let b = 100; // referring to memory space in SCRIPT SCOPE( outside of block)
{
  var a = 10; //GLOBAL SCOPE
  let b = 20; //BLOCK SCOPE
  const c = 30; //BLOCK SCOPE
  console.log(b); // 20 ( let b of line 4 can't shadow let b of line1, because it is referring to memory space of BLOCK SCOPE for line 6)
}
console.log(b); //SCRIPT SCOPE
console.log(a);

// 100 ( let b of line 4 can't shadow let b of line1,
//because it is referring to memory space of BLOCK SCOPE for line 6)
// HENCE, showing the value storing in SCRIPT scope for line 1

// ----------SAME WITH CONST JUST AS LET ----------
