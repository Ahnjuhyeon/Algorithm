const numlist = [2, 100, 120, 600, 12, 12];
function solution(n, numlist) {
  var answer = numlist.filter((el) => el % n === 0);
  return answer;
}
solution(12, numlist);