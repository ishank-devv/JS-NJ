var a = 100; // referring to memory space in GLOBAL SCOPE
{
  var a = 10; // var a of line 3 shadowed var a of line1, referring to memory space in GLOBAL SCOPE
  let b = 20;
  const c = 30;
  console.log(a); // 10 ( var a of line 3 shadowed var a of line1)
}
console.log(a);
// 10 ( var a of line 3 shadowed var a of line1,
// it changed the var 'a' in "GLOBAL SCOPE")
