function solution(s1, s2) {
    return s1.map((v) => s2.filter((r) => r === v)).flat().length;
}