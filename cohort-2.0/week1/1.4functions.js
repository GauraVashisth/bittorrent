/*Functons:  a set of statements that performs a task or calculate a value,
  it shoulld take some inoutand return an output where there is some obvious relationship
  b/w the input and output.
*/

//Basic syntax for function:
function findSum/*name of function*/(n/*argument(input)*/) {
//function body
  let ans = 0;
  for (let i=1;i<=n;i++){
    ans = ans+i
  }
//function body  
  return ans;//return value 
}
//calling a function
let sol = findSum(100)
console.log(sol);