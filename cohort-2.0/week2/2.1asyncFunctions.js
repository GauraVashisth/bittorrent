//async(asynchronous)
  /*js thread doesnt have accesss to everything immediately
  there are some tasks it needs to wait for*/
  /*for example:
  reading a file
  sending a network request
  a deliberate timeout*/

const fs= require("fs");
fs.readFile("a.txt",  "utf-8", function(err, data){
  console.log(err);  
  console.log(data);
});





