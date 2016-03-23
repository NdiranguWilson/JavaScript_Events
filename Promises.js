
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
         resolve({data: '123'});
      }, 2000);
   });
   return promise;
};


var piSquared = function() {
   var promise = new Promise(function(resolve, reject){
      setTimeout(function() {
         console.log('area is' + pi*pi);
         resolve({newData: pi.data + ' some more data'});
      }, 2000);
   });
   return promise;
};

var thirdMethod = function(someStuff) {
   var promise = new Promise(function(resolve, reject){
      setTimeout(function() {
         console.log('third method completed');
         resolve({result: someStuff.newData});
      }, 3000);
   });
   return promise;
};

//Chaining the promises
getPI()
   .then(piSquared)
   .then(thirdMethod);
