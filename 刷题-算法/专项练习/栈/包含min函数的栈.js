// 定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，
// 调用 min、push 及 pop 的时间复杂度都是 O(1)。

// 暴力法
// var MinStack = function() {
//     this.stack = [];
// }

// MinStack.prototype.push = function(x) {
//     this.stack.push(x);
// }
// MinStack.prototype.pop = function() {
//     this.stack.pop();
// }
// MinStack.prototype.top = function() {
//     const len = stack.length;
//     if (len) {
//         return this.stack[len - 1]
//     } else {
//         return null;
//     }
// }
// MinStack.prototype.min = function() {
//     const len = this.stack.length;
//     if (!len) return null;
//     return Math.min(...this.stack);
// }


//使用辅助栈
// https://cloud.tencent.com/developer/article/1618056

var MinStack = function() {
    this.stack = [];
    this.minstack = [];
}
MinStack.prototype.push = function(x) {
    this.stack.push(x);

    const len = this.minstack.length;
    if (!len) {
        this.minstack.push(x);
    } else if (x <= this.minstack[len - 1]) {
        this.minstack.push(x);
    }
};
MinStack.prototype.pop = function() {
    const { minstack, stack0 } = this;
    if (minstack[minstack.length - 1] === stack[this.stack.length - 1]) {
        minstack.pop();
    }
    stack.pop();
}
MinStack.prototype.top = function() {
    const len = this.stack.length;
    if (len) {
        return this.stack[len - 1];
    } else {
        return null;
    }
}
MinStack.prototype.min = function() {
    const len = this.minstack.length;
    if (!len) return null;
    return this.minstack[len - 1];
}