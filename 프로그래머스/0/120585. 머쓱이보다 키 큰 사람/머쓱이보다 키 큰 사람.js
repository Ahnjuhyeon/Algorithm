function solution(array, height) {
  var answer = array.filter((el) => el > height);
  return answer.length;
}
