/****************************************************
 * A better way to compare two objects in Javascript
 ****************************************************/

function getKeys(obj) {
    var keys;
    if(obj.keys) {
        keys = obj.keys();
    } else {
        keys = [];

        for(var k in keys) {
            if(Object.prototype.hasOwnProperty.call(keys, k)) {
                keys.push(k);
            }
        }
    }

    return keys;
}

/**
 * Create a new object so the keys appear in the provided order.
 * @param {Object} obj The object to be the base for the new object
 * @param {Array} keys The order in which properties of the new object should appear
 **/
function reconstructObject(obj, keys) {
    var result = {};
    for (var i = 0, l = keys.length; i < l; i++) {
        if (Object.prototype.hasOwnProperty.call(obj, keys[i])) {
            result[keys[i]] = obj[keys[i]];
        }
    }

    return result;
}

function assertObjectEqual(a, b, msg) {
    msg = msg || '';
    if( Object.prototype.toString.call( a ) === '[object Array]' && Object.prototype.toString.call( b ) === '[object Array]') {
        assert.equal(JSON.stringify(a), JSON.stringify(b), msg);
    } else {
        var orderedA = reconstructObject(a, getKeys(a).sort()),
            orderedB = reconstructObject(b, getKeys(b).sort());

        // compare as strings for diff tolls to show us the difference
        assert.equal(JSON.stringify(orderedA), JSON.stringify(orderedB), msg);
    }
}