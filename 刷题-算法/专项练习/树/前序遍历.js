// 递归法
function preOrderTraversal(root) {
    let res = [];
    var preorder = function(root) {
        if (!root) return;
        res.push(root.val);
        preorder(root.left);
        preorder(root.right);
    }
    preorder(root);
    return res;

}

// 栈
function preOrderTraversal(root) {
    let res = [];
    let stack = [];

    if (root) {
        stack.push(root);
        while (stack.length != 0) {
            node = stack.pop();
            res.push(node.val);
            if (node.right) {
                stack.push(node.right);
            }
            if (node.left) {
                stack.push(node.left);
            }
        }

    }
    return res;
}