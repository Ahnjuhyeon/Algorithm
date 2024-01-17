const arr = ["a", "e", "i", "o", "u"];
function solution(my_string) {
  arr.forEach((value) => {
    my_string = my_string.replaceAll(value, "");
  });
  return my_string;
}