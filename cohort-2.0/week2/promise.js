/*promises
  just syntactical sugar
  just a more readable way to write async functions*/
//can also write JS w/o them, just use callbacks instead

const { setTimeout } = require("timers/promises");


//how would u create ur own async function?
/*APPROACH1: when creating async fxn, wrap around another async fxn to create something new/ new functionality*/
function myOwnSetTimeout(fn, duration){
  setTimeout(fn, duration);
}
myOwnSetTimeout(function(){
  console.log("hi there.");
}, 1000);
//this approach uses a callback, uve created a fxn where other people can send a calback. this is good, but could lead to callback hell
/*callback hell:
  callbacks lead to unnecessary indentaton, this is called callback hell*/


/*APPROACH2: nesting setTimeout fxns*/
setTimeout(function() {
  console.log("level1");
  setTimeout(function(){
    console.log("level2");
    setTimeout (function(){
      console.log("level3");
    }, 3000);
  }, 2000);
}, 1000);
//unnecessary and ugly indentation


/*APPROACH3: async await*/
//thats how promises fixes the callback hell issue
/* async await:
waitFor(1000);
console.log(level1);
waitFor(2000);
console.log(level2);
waitFor(3000);
console.log(level3);*/

/*
function myOwnSetTimeout(callback, duration) {
  setTimeout(function(){
    callback();
  }, duration);
}
myOwnSetTimeout (function(){

}, 1000)*/
//different syntax of doing async fxns, defining the function
function promisifiedMyOwnSetTimeout(duration) {
  const p= new Promise(function(resolve){
    setTimeout(function() {
      resolve();
    }, duration);
  });
  return p;
}
//calling the function
//async await syntax, promise chaining => callback hell(helps to get rid of)
const ans = promisifiedMyOwnSetTimeout(100);
//giving it the  callback
ans.then(function(){
  console.log("timeout is done")
});

//2 ways to create sync fxns:
/*non-promisified
  when defining a fxn here, it doesnt return anything
  but, takes callback as an input
  callback is the way to tell the caller that something has been done

promisified
  does return a promise
  doesnt take callback as an input
  the promise that it returns, is the way how the caller will eventually get the callback/actually know that this fxn has done its sync call*/