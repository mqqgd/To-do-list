// var twoSum = function(nums, target) {
//     const map = {}
//     for(let i = 0,len = nums.length; i<len; i++) {
//         // 如果对象中存在  目标值减当前值, 则输出
//         if (map[target-nums[i]] !== undefined) {
//             return [map[target-nums[i]], i]
//         } else {
//             // 不存在, 则赋值
//             map[nums[i]] = i
//         }
//     }
// };

//动态哈希表，使用的ES6的Map对象
var twoSum = function(nums, target) {
    const map = new Map();
    for (let i = 0, len = nums.length; i < len; i++) {
        var cha = target - nums[i];
        if (map.has(cha)) {
            return [map.get(cha), i]
        }
        map.set(nums[i], i)

    }

};