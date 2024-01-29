function solution(order) {
    const arr = Array.from(String(order), Number);
  const reduce = arr.reduce((a, b) => {
    if ([3, 6, 9].includes(b)) {
      return a + 1;
    } else {
      return a;
    }
  }, 0);
  return reduce;
}