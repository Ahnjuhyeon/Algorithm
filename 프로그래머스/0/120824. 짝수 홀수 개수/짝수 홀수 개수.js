const arr = [1, 3, 5, 7];
function solution(num_list) {
  const a = num_list.filter((v) => v % 2 === 0).length;
  const b = num_list.filter((v) => v % 2 === 1).length;
  return [a, b];
}
solution(arr);