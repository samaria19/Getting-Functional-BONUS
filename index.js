//DO NOT CHANGE CODE HERE
var customers = require('./customers.json');
//DO NOT CHANGE CODE HERE



/*

Write a function that canfind the average balance 
of all of the customers in the dataset. You will 
need to know how to find the average of a set of 
numbers and know how to access the balance property 
in the object.

*/
//1.how do you find an averge for a set of number
//2,where can you find the balance for each customers
//3.where can you store the totle sum of balances
//4.can you make this work for a data set of infinite length

function averageBalance(array){
  //CODE BELOW HERE
  var sum = 0
for(var i=0; i<= array.length - 1; i++ ){
  (sum += array[i].balance / customers.length) 
}



  //CODE ABOVE HERE
}