function solution(n, k) {
  const price = n * 12000;
  const freeCola = Math.floor(n / 10);
  const colaPrice = (k - freeCola) * 2000;
  return price + colaPrice;
}

