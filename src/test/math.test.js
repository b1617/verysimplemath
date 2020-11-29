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
    expect(math.substract(0, 1, 1)).toBe(-2);
  });
  it('should substract any number of args', () => {
    expect(math.substract(2, 1, 1, 2)).toBe(-2);
  });
  it('should substract negative number ', () => {
    expect(math.substract(-4, -2)).toBe(-2);
  });
});

describe('multiply', () => {
  it('should return 0 if no args', () => {
    expect(math.multiply()).toBe(0);
  });

  it('should return a sole number', () => {
    expect(math.multiply(5)).toBe(5);
  });

  it('should multiply 2 number', () => {
    expect(math.multiply(1, 2)).toBe(2);
  });
  it('should multiply n number', () => {
    expect(math.multiply(1, 2, 3)).toBe(6);
  });
});

describe('divide', () => {
  it('shoud return 0 if no args', () => {
    expect(math.divide()).toBe(0);
  });

  it('should return sole number', () => {
    expect(math.divide(1)).toBe(1);
  });

  it('should divide two number', () => {
    expect(math.divide(2, 2)).toBe(1);
  });

  it('should return 0', () => {
    expect(math.divide(0, 2)).toBe(0);
  });

  it('should divide n numbers', () => {
    expect(math.divide(4, 2, 2)).toBe(1);
  });

  it('shoud return 0 if args contains 0', () => {
    expect(math.divide(5, 6, 3, 0, 4)).toBe(0);
  });
});
