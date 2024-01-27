function solution(num, k) {
  var answer = num.toString().split("");
  const result = answer.findIndex((v) => v === k.toString());
  return result !== -1 ? result + 1 : -1;
}
solution(232443, 4);
