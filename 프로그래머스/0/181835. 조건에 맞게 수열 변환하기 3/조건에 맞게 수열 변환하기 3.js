const arr = [1, 2, 3, 100, 99, 98];
function solution(arr, k) {
  if (k % 2 === 1) return arr.map((value) => value * k);
  if (k % 2 === 0) return arr.map((value) => value + k);
}
solution(arr, 3);