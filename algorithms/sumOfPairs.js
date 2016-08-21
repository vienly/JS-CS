function sumOfPairs( sum, arrInts ) {
  var result = [];
  var seen = {};
  var i = 0;
  var length = arrInts.length;

  for (i = 0; i < length; i++) {
    var target = sum - arrInts[i];

    if (!seen[target]) {
      seen[arrInts[i]] = true;
    } else {
      result.push(arrInts[i] + ' + ' + target);
    }
  }

  // result = result.filter( function( item, index, inputArray ) {
  //   return inputArray.indexOf(item) === index;
  // });

  return result;
}

module.exports = sumOfPairs;
