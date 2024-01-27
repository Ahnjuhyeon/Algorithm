const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function solution(numbers) {
return numbers.reduce((a, b) => a + b, 0) / numbers.length;
  
}
solution(arr);