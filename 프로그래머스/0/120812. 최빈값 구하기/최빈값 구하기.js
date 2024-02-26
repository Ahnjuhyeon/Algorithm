function solution(array) {
var count = {};
  var maxCount = 0;
  var mode = [];

  for (var i = 0; i < array.length; i++) {
    var num = array[i];
    count[num] = (count[num] || 0) + 1;

    if (count[num] > maxCount) {
      maxCount = count[num];
      mode = [num];
    } else if (count[num] === maxCount && !mode.includes(num)) {
      mode.push(num);
    }
  }


  if (mode.length === 1) {
    return parseInt(mode[0]);
  } else {
    return -1;
  }
}