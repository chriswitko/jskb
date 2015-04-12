/**
 * Finding minimum element in input array
 * @param  {array} array Input array
 * @return {number}       Minimum element in the array
 */
function arrayMinimum(array) {
    var indexOfMinimum = 0;
    for (var i = 1; i < array.length; i++) {
        console.log('pos', array[i]);
        if (array[i] < array[indexOfMinimum]) {
            indexOfMinimum = i;
        }
    }
    return array[indexOfMinimum];
}

console.log('min', arrayMinimum([19, 32, 11, 23]));