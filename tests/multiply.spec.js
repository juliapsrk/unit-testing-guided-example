const { multiply } = require('./../calculator.js');

describe('Multiply', () => {
  test('should be the result of the multiplication of both values', () => {
    const result = multiply(1, 2);
    expect(result).toBe(2);
  });

  test('should be a negative number', () => {
    const result = multiply(-2.5, 4.5);
    expect(result).toBe(-11.25);
  });

  test('should be 0 (any number multiplied by 0 equals 0)', () => {
    const result = multiply(0, 3.7);
    expect(result).toBe(0);
  });
});
