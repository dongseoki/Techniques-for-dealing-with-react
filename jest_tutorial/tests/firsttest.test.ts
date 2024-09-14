// 테스트할 함수 정의
function addNumbers(a: number, b: number): number {
  return a + b;
}

// 테스트 스위트
describe('addNumbers 함수', () => {
  // 개별 테스트 케이스
  test('양수 더하기', () => {
    console.log('양수 더하기 테스트');
    expect(addNumbers(1, 2)).toBe(3);
  });

  test('음수와 양수 더하기', () => {
    expect(addNumbers(-1, 1)).toBe(0);
  });

  test('0 더하기', () => {
    expect(addNumbers(0, 0)).toBe(0);
  });

  test('소수점 숫자 더하기', () => {
    expect(addNumbers(3.5, 2.5)).toBe(6);
  });

  test('큰 숫자 더하기', () => {
    expect(addNumbers(1000000, 2000000)).toBe(3000000);
  });
});
