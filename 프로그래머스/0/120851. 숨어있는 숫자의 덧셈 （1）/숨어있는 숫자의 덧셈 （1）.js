function solution(my_string) {
  var answer = my_string;
  const replaceArr = answer.replace(/[^0-9]/g, "").split("");
  const result = replaceArr.reduce((a, b) => a + Number(b), 0);
  return result;
}
solution("aAb1B2cC34oOp");