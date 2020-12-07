/**
 * @param  {...number} nums
 * @return {number}
 */
const add = (...nums) => {
  return nums.reduce((total, num) => total + num, 0);
};

/**
 * @param  {...number} nums
 * @return {number}
 */
const substract = (...nums) => {
  if (nums.length === 0) return 0;
  return nums.reduce((total, num) => total - num, nums[0] * 2);
};

/**
 * @param  {...number} nums
 * @return {number}
 */
const multiply = (...nums) => {
  if (nums.length == 0) return 0;
  return nums.reduce((total, num) => total * num, 1);
};

/**
 * @param  {...number} nums
 * @return {number}
 */
const divide = (...nums) => {
  if (nums.length == 0 || nums.includes(0)) return 0;
  return nums.reduce((total, num) => total / num, nums[0] * nums[0]);
};

/**
 * @param  {...number} nums
 * @return {number[]}
 */
const intersection = (...nums) => {
  let res = [];
  let frequency = nums.reduce((map, numbers) => {
    for (let num of numbers) {
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

/**
 * @param  {...number} nums
 * @return {number[]}
 */
const union = (...nums) => {
  if (!nums) return [];
  let items = nums.reduce((set, numbers) => {
    for (let n of numbers) {
      if (!set.has(n)) {
        set.add(n);
      }
    }
    return set;
  }, new Set());

  return [...items];
};

module.exports = { add, substract, multiply, divide, intersection, union };
