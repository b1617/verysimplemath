const add = (...nums) => {
  return nums.reduce((total, num) => total + num, 0);
};

const substract = (...nums) => {
  if (nums.length === 0) return 0;
  return nums.reduce((total, num) => total - num, nums[0] * 2);
};

const multiply = (...nums) => {
  if (nums.length == 0) return 0;
  return nums.reduce((total, num) => total * num, 1);
};

const divide = (...nums) => {
  if (nums.length == 0 || nums.includes(0)) return 0;
  return nums.reduce((total, num) => total / num, nums[0] * nums[0]);
};

const intersection = (...nums) => {
  let res = [];
  let frequency = nums.reduce((map, nums) => {
    for (let num of nums) {
      if (map.get(num)) {
        map.set(num, map.get(num) + 1);
      } else {
        map.set(num, 1);
      }
    }
    return map;
  }, new Map());

  for (let [key, value] of frequency.entries()) {
    if (value > nums.length - 1) {
      res.push(key);
    }
  }
  return res;
};

module.exports = { add, substract, multiply, divide, intersection };
