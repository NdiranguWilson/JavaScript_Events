
/**
 * Cytonn Technologies
 * @author Ndirangu wilson <wndirangu@cytonn.com>
 *
 */

var pi;
var getPI = function() {
   var promise = new Promise(function(resolve, reject){
      setTimeout(function() {
         pi=(Math.PI).toFixed(2);
         console.log('Pi is '+ (Math.PI).toFixed(2));
         if(pi==3.13){
         resolve({data: pi});
       }
       else {
         reject(pi=3.123,console.log(pi));
       }
      }, 2000);
   });
   return promise;
};


var piSquared = function() {
   var promise = new Promise(function(resolve, reject){
      setTimeout(function() {
         console.log('squared pi is ' + pi*pi);
         resolve({newData: pi.data});
      }, 2000);
   });
   return promise;
};

var picubed = function() {
   var promise = new Promise(function(resolve, reject){
      setTimeout(function() {
         console.log('pi cubed is ' + Math.pow(pi,3).toFixed(2));
         resolve({result: Math.pow(pi,3)});
      }, 3000);
   });
   return promise;
};

//Chaining the promises
getPI()
   .then(piSquared)
   .then(picubed);
