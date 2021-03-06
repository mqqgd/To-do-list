// 在上次打劫完一条街道之后和一圈房屋后，小偷又发现了一个新的可行窃的地区。
// 这个地区只有一个入口，我们称之为“根”。 
// 除了“根”之外，每栋房子有且只有一个“父“房子与之相连。
// 一番侦察之后，聪明的小偷意识到“这个地方的所有房屋的排列类似于一棵二叉树”。 
// 如果两个直接相连的房子在同一天晚上被打劫，房屋将自动报警。

// 计算在不触动警报的情况下，小偷一晚能够盗取的最高金额。

// 输入: [3,2,3,null,3,null,1]

//      3
//     / \
//    2   3
//     \   \ 
//      3   1

// 输出: 7 
// 解释: 小偷一晚能够盗取的最高金额 = 3 + 3 + 1 = 7.

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

function rob(root) {
    let res = robHelper(root);
    return Math.max(res[1], res[0]); //取偷根节点和不偷根节点

}

function robHelper(root) {
    if (!root) return [0, 0]; //边界条件
    if (root.left === null && root.rigth === null) {
        return [0, root.val];
    }
    let left = robHelper(root.left);
    let right = robHelper(root.right);
    return [Math.max(left[0], left[1]) + Math.max(right[0], right[1]), left[0] + right[0] + root.val]
}

let root = [3, 2, 3, null, 3, null, 1];
let res = rob(root);
console.log(res)