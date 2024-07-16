let a = 20;
{
  let a = 20; // legal
}

var b = 30;
{
  let b = 40; // legal
  console.log(b);
}
console.log(b);

const c = 50;
{
  const c = 50; // legal
}
