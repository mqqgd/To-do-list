// 递归法
// function inorderTraversal(root) {
//     let res = [];
//     inorder(root, res);
//     return res;
// }

// function inorder(root, res) {
//     if (!root) return;
//     inorder(root.left, res);
//     res.push(root.val);
//     inorder(root.right, res);
// }

// 递归法2
function inorderTraversal(root) {
    let res = [];
    var inorder = function(root) {
        if (!root) return;
        inorder(root.left);
        res.push(root.val);
        inorder(root.rigth);
    }
    inorder(root);
    return res;
}

// 栈
function inorderTraversal(root) {
    let res = [];
    let stack = [];

    while (root || stack.length > 0) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        res.push(root.val);
        root = root.right;
    }
    return res;

}