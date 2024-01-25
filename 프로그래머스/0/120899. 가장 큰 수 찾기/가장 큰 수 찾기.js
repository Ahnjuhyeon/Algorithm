const array = [9, 10, 11, 8];
function solution(array) {
  const max = Math.max(...array);
  const maxIndex = array.indexOf(max);
  return [max, maxIndex];
}
solution(array);