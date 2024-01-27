const my_string = "hi12392";
function solution(my_string) {
  return my_string
    .split("")
    .filter((v) => v.match(/[0-9]/g))
    .map((el) => Number(el))
    .sort();
}
solution(my_string);
