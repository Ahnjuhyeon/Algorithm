function solution(my_string, num1, num2) {
  const answer = my_string.replace(/./g, (match, index) => {
    if (index === num1) return my_string[num2];
    if (index === num2) return my_string[num1];

    return match;
  });
  return answer;
}
solution("hello", 1, 2);