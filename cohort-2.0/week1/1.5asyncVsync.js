/*
what does synchronous mean?
  together, one after the other, sequencial
  only one thing is happening at a time
what does asynchronous mean?
  opposite of synchronous, happrns in parts
  multiple things are context switching with each other

note:
  even if you are single threaded, you can do things parallely by delegating.
  you can also context switch b/w if needed to be(the net time to do both the things the things woould still be the same)
  net amount of time to do a task can be decreased, by doing these two things(delegating N context switching)
*/

//how does js do the the same? can js delegate? can js context switch? => yes, using asynchronous functions

//a synchronous function
  /*during the whole process of control moving in the code, js thread is busy and it cant do any other task*/
function findSum(n) {
    let ans = 0;
    for (let i=1;i<=n;i++){
      ans = ans+i
    }
    return ans;
  }
let sol = findSum(100)
console.log(sol);

//an asynchronous function
  /**/
//setTimeout is a global js fxn, it is used to run a specific fxn after some duration
function findSum(n) {
  let ans =0;
  for(let i=0; i<=n; i++){
    ans+=i;
  }
  return ans;
}
function findSumTill100() {
  console.log( findSum(100));
}
setTimeout(findSumTill100, 1000)
console.log("hi");


//using syncsleep
function findSum(n) {
  let ans =0;
  for(let i=0; i<=n; i++){
    ans+=i;
  }
  return ans;
}
function findSumTill100() {
  console.log( findSum(100));
}
//busy waiting
function syncsleep() {
  let a= 1;
  for (let i =0; i<1000000000; i++){
    a++;
  }
}
syncsleep();
findSumTill100();
//setTimeout(findSumTill100, 1000)
console.log("hi");


/*what are common aync functions?
setTimeout
fs.readFile: to read a file from your filesystem
Fetch: to fetch some data from an api endpoint*/

