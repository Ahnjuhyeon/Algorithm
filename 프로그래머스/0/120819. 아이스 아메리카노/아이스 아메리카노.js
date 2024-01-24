function solution(money) {
  const coffee = 5500;
  const maxCups = Math.floor(money / coffee); //정수반환 => 최대 잔
  const change = Math.floor(money % coffee); //정수반환 => 잔돈
  return [maxCups, change];
}
solution(7000);