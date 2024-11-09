//by using callbacks, we can reduce code repetition
/*by creating a single functon(sumofsomething) that does this logic on a 
function it gets as an input*/
function sqr(n) {
  return n* n;
}

function cube(n) {
  return n* n* n;
}

function quad(n) {
  return n* n* n* n;
}

function sumofsomething(a, b, callbackfn) {
  let val1 = callbackfn(a);
  let val2 = callbackfn(b);
  return val1+ val2;
}

//function arguments
let ans= sumofsomething(1, 2, quad);
console.log(ans);
