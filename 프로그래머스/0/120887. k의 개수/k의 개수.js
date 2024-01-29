function solution(i, j, k) {
  var answer = [];
  for (let v = i; v <= j; v++) {
    answer.push(v);
  }
  const includes = answer
    .toString()
    .split("")
    .map((a) => a === k.toString());
  const result = includes.filter((a) => a === true).length;
  return result;
}

solution(1, 13, 1);
