// 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。

// num1 和num2 的长度都小于 5100
// num1 和num2 都只包含数字 0-9
// num1 和num2 都不包含任何前导零
// 你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式

// 创建指针 i 指向nums1 末位数字，j 指向 nums2 末位数字。
//i, j 数字相加，用进位就用 carry 来记录进位值，无则为 0。
// 若产生进位，则当前数字为 (i+j)%10 的值。
// 若遍历过程中，nums1 或 nums2 当前已无数字，则用 0 补位来计算。

function addStrings(num1, num2) {
    let i = num1.length - 1,
        j = num2.length - 1;
    let carry = 0,
        res = [];
    while (i >= 0 || j >= 0 || carry !== 0) {
        let c1 = i >= 0 ? num1.charAt(i) - '0' : 0;
        let c2 = j >= 0 ? num2.charAt(j) - '0' : 0;
        let sum = c1 + c2 + carry;
        res.push(sum % 10);
        carry = Math.floor(sum / 10);
        i--;
        j--;
    }
    console.log(res)
    return res.reverse().join('');
}
let num1 = '11';
let num2 = '123'
let result = addStrings(num1, num2);
console.log(result)