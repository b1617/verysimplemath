const math = require('..');

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

  it('should add negative numbers', () => {
    expect(math.add(-1, -2, -3)).toBe(-6);
  });

  it('should add negative and postive numbers', () => {
    expect(math.add(-1, 4, -2, 5, 6, -3)).toBe(9);
  });
});

describe('substract', () => {
  it('should return 0 if not number', () => {
    expect(math.substract()).toBe(0);
  });
  it('should return a sole number', () => {
    expect(math.substract(1)).toBe(1);
  });
  it('should substract two numbers', () => {
    expect(math.substract(1, 1)).toBe(0);
  });
  it('should substract two numbers', () => {
    expect(math.substract(2, 1)).toBe(1);
  });
  it('should substract three numbers', () => {
    expect(math.substract(0, 1, 1)).toBe(-2);
  });
  it('should substract any number of args', () => {
    expect(math.substract(2, 1, 1, 2)).toBe(-2);
  });
  it('should substract negative numbers ', () => {
    expect(math.substract(-4, -2)).toBe(-2);
  });
  it('should substract negative and positive numbers ', () => {
    expect(math.substract(-4, 5, -2, 7)).toBe(-14);
  });
});

describe('multiply', () => {
  it('should return 0 if no args', () => {
    expect(math.multiply()).toBe(0);
  });

  it('should return a sole number', () => {
    expect(math.multiply(5)).toBe(5);
  });

  it('should multiply 2 numbers', () => {
    expect(math.multiply(1, 2)).toBe(2);
  });
  it('should multiply n numbers', () => {
    expect(math.multiply(1, 2, 3)).toBe(6);
  });

  it('shoud multiply negative numbers', () => {
    expect(math.multiply(-8, -4)).toBe(32);
  });

  it('shoud multiply negative and positive numbers', () => {
    expect(math.multiply(-8, 4)).toBe(-32);
  });

  it('shoud multiply numbers', () => {
    expect(math.multiply(-8, -4, 2, -5, 5)).toBe(-1600);
  });
});

describe('divide', () => {
  it('shoud return 0 if no args', () => {
    expect(math.divide()).toBe(0);
  });

  it('should return sole number', () => {
    expect(math.divide(1)).toBe(1);
  });

  it('should divide two numbers', () => {
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

  it('shoud divide negative numbers', () => {
    expect(math.divide(-8, -4)).toBe(2);
  });

  it('shoud divide negative  and positive numbers', () => {
    expect(math.divide(-8, 4)).toBe(-2);
  });
});

describe('intersection', () => {
  it('should return empty array if no args', () => {
    expect(math.intersection()).toEqual([]);
  });
  it('should return array if one arg', () => {
    expect(math.intersection([1])).toEqual([1]);
  });
  it('should intersection two array', () => {
    expect(math.intersection([1, 2, 3], [2, 3])).toEqual([2, 3]);
  });
  it('shoud intersection n array', () => {
    expect(math.intersection([1, 2, 3], [2, 4], [4, 6, 2])).toEqual([2]);
  });
  it('shoud intersection n postive and negative array', () => {
    expect(math.intersection([1, 2, 3, -4], [2, -4], [-4, 6, 2])).toEqual([
      2,
      -4
    ]);
  });
});

describe('union', () => {
  it('should return empty if no args', () => {
    expect(math.union()).toEqual([]);
  });

  it('should return array if one arg', () => {
    expect(math.union([1])).toEqual([1]);
  });

  it('should union two array', () => {
    expect(math.union([1, 2], [2, 4])).toEqual([1, 2, 4]);
  });

  it('should union n array', () => {
    expect(math.union([1, 2], [3, 4], [5, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should union postive and negative array', () => {
    expect(math.union([1, 2], [-3, 4], [5, -5])).toEqual([1, 2, -3, 4, 5, -5]);
  });
});
