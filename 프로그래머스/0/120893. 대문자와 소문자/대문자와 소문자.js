function solution(my_string) {
  var answer = [...my_string].map((v) => {
    if (v === v.toUpperCase()) {
      return v.toLowerCase();
    } else {
      return v.toUpperCase();
    }
  });
  return answer.join("");
}