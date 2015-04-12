// filter < 5 numbers
function lessThan5(x) {
  return x < 5;
}
var small = numbers.filter(lessThan5);
console.log('small numbers', small);
// small numbers [ 3, 1 ]


var reducedSmall = numbers.reduce(function (alreadySmall, x) {
  if (lessThan5(x)) {
    alreadySmall.push(x);
  }
  return alreadySmall;
}, []);
console.log('reduced small numbers', reducedSmall);
// reduced small numbers [ 3, 1 ]


function reduceFilter(fn) {
  return function (mapped, x) {
    if (fn(x)) {
      mapped.push(x);
    }
    return mapped;
  };
}
console.log('small numbers',
    numbers.reduce(reduceFilter(lessThan5), [])
);
// small numbers [ 3, 1 ]


function isNumber(x) {
  return typeof x === 'number';
}
var list = ['a', 'b', 1, 2, 3, 'c'];
console.log(list.filter(isNumber)); // [1, 2, 3]

// The .filter iterator returns every value that passes the given predicate. What if we wanted to know what the second number is in an array? We could filter and access element with index 1.
function nth(k, predicate, list) {
  return list.filter(isNumber)[k];
}
var secondNumber = nth.bind(null, 1, isNumber);
console.log(secondNumber(list)); // 2

// instead of making a new array right away, we can write a function that keeps count how many times a predicate returned true.
function nth(n, predicate) {
  var k = 0;
  return function () {
    var result = predicate.apply(null, arguments);
    if (result) {
      k += 1;
    }
    return k === n;
  };
}

var list = ['a', 'b', 1, 2, 3, 'c'];
var secondNumber = nth(2, isNumber);
console.log(list.map(secondNumber));
// [ false, false, false, true, false, false ]