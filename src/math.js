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

module.exports = { add, substract, multiply, divide };
