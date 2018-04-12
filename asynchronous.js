var maxTime = 1000;

var eventDoubler = function(v, callback)  {
  var waitTime = Math.floor(Math.random()*(maxTime+1));
  if(v % 2){
    setTimeout(function()  {
      callback(new Error("Odd input"));
    }, waitTime);
  }  else  {
    setTimeout(function()  {
      callback(null, v*2, waitTime);
    }, waitTime);
  }  
};

var handleResults = function(err, results, time)  {
  if(err)  {
    console.log("Error: " + err.message);
  }  else  {
      console.log("The results are: " + results + "(" + time + " ms)");
  }
};

// Printing out

eventDoubler(2, handleResults);
eventDoubler(3, handleResults);
console.log("----------");
eventDoubler(10, handleResults);

for (var i = 0; i<10; i++) {
  console.log("Calling eventDoubler for value: " + i);
  eventDoubler(i, handleResults);
}

console.log("==========");
