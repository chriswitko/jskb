var numbers = [3, 1, 7];
var sum = numbers.reduce(function (total, x) {
  return total + x;
}, 0);
console.log('sum of', numbers, '=', sum);
// sum of [ 3, 1, 7 ] = 11