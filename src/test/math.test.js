const math = require('../math');

describe('add', () => {
  it('should add two number', () => {
    expect(math.add(1, 2)).toBe(3);
  });
  it('should return a sole input', () => {
    expect(math.add(5)).toBe(5);
  });
  it('should return 0 if not number', () => {
    expect(math.add()).toBe(0);
  });
  it('should add three number', () => {
    expect(math.add(1, 2, 3)).toBe(6);
  });
  it('should add any number of args', () => {
    expect(math.add(1, 2, 3, 4, 5, 6)).toBe(21);
  });
});

describe('substract', () => {
  it('should return 0 if not number', () => {
    expect(math.substract()).toBe(0);
  });
  it('should return a sole number', () => {
    expect(math.substract(1)).toBe(1);
  });
  it('should substract two number', () => {
    expect(math.substract(1, 1)).toBe(0);
  });
  it('should substract two number', () => {
    expect(math.substract(2, 1)).toBe(1);
  });
  it('should substract three number', () => {
    expect(math.substract(2, 1, 1)).toBe(0);
  });
  it('should substract any number of args', () => {
    expect(math.substract(2, 1, 1, 2)).toBe(-2);
  });
  it('should substract negative number ', () => {
    expect(math.substract(-4, -2)).toBe(-2);
  });
});
