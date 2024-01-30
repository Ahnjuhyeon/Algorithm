function solution(n) {
  return Array.from(String(n), Number).reduce((a, b) => a + b, 0);
}