const add = (...nums) => {
  return nums.reduce((total, num) => total + num, 0);
};

const substract = (...nums) => {
  let res = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (i == 0) {
      res += nums[i];
    } else {
      res -= nums[i];
    }
  }
  return res;
};

module.exports = { add, substract };
