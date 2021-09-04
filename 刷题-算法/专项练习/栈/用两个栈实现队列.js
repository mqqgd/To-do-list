// 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，
// 分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )

// 输入：
// ["CQueue","appendTail","deleteHead","deleteHead"]
// [[],[3],[],[]]
// 输出：[null,null,3,-1]

// 使用两个栈
function Queue() {
    this.stackPush = [];
    this.stackPop = [];
}

//队列添加元素
Queue.prototype.appendTail = function(value) {
    this.stackPush.push(value);
}

// 队列删除元素
Queue.prototype.deleteHead = function() {
    // 若stackPop中有元素，直接删除
    if (this.stackPop) {
        this.stackPop.pop();
    }
    // 若元素，将stackPush中的所有元素全部出栈，放到stackPop中
    while (this.stackPush) {
        this.stackPop.push(this.stackPush.pop())
    }
    // 再删除stackpop中的元素，两个栈为空则删除-1
    return this.stackPop.pop() || -1;
}


// 使用一个栈
function Queue() {
    this.stack = [];
}
Queue.prototype.appendTail = function(value) {
    this.stack.push(value);
}
Queue.prototype.deleteHead = function() {
    return this.stack.shift() || -1;
}


var queque = new Queue();
queque.appendTail(value);
var param_2 = queque.deleteHead();