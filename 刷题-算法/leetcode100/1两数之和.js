// 给定一个整数数组 nums 和一个整数目标值 target，
// 请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

//方法1


//方法2：哈希表1
// var twoSum = function(nums, target) {
//     const map = {};
//     for (let i = 0; i < nums.length; i++) {
//         //如果对象中存在  目标值减当前值，则输出
//         if (map[target - nums[i]] !== undefined) {
//             return [map[target - nums[i]], i];
//         } else {
//             //不存在，则赋值
//             map[nums[i]] = i;
//         }
//     }
// }

//方法2：哈希表2  ES6
// Map 是 ES6 中新增的数据结构，Map 类似于对象，
// 但普通对象的 key 必须是字符串或者数字，而 Map 的 key 可以是任何数据类型...
var twoSum = function(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        var cha = target - nums[i];
        if (map.has(cha)) { //has判断成员是否存在
            return [map.get(cha), i] //get获取成员属性值
        }
        map.set(nums[i], i); //map.set()，用nums[i]作为key，i是value

    }
}


//test
let nums = [2, 7, 11, 15],
    target = 9
let res = twoSum(nums, target)
console.log(res)