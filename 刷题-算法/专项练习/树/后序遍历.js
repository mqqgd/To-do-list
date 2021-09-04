// 先把根节点和左树推入栈，然后取出左树，再推入右树，取出，最后取跟节点。

// 方法1  非递归（使用两个栈）
function postOrderTraversal(root) {
    let res = [];
    let stack1 = [];
    let stack2 = [];
    if (root) {
        stack1.push(root);
        while (stack1.length !== 0) {
            root = stack1.pop();
            stack2.push(root);
            if (root.left) {
                stack1.push(root.left);
            }
            if (root.right) {
                stack1.push(root.right);
            }
        }
        while (stack2.length !== 0) {
            res.push(stack2.pop().val);
        }
        return res;
    }

}

//递归法
function postOrderTraversal(root) {
    let res = [];
    var postorder = function(root) {
        if (!root) return;
        postorder(root.left);
        postorder(root.right);
        res.push(root.val);
    }
    postorder(root)
    return res;
}