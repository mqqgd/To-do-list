// 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。
// 如果是，返回 true ；否则，返回 false 

// 输入：head = [1,2,2,1]
// 输出：true

//方法1： 使用栈
function isPalindrome(head) {
    let cur = head;
    let stack = [];

    while (cur !== null) {
        stack.push(cur);
        cur = cur.next;
    }
    //出栈
    while (head !== null) {
        if (head.val !== stack.pop().val) {
            return false;
        }
        head = head.next;
    }
    return true;
}

//方法2：  反转后半部分链表
function isPalindrome(head) {
    let fast = head,
        slow = head;
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    if (fast !== null) {
        slow = slow.next;
    }
    slow = reverseList(slow);

    fast = head;
    while (slow !== null) {
        if (fast.val !== slow.val) {
            return false;
        }
        fast = fast.next;
        slow = slow.next;
    }
    return true;
}

function reverseList(head) {
    let pre = null;
    while (head != null) {
        let next = head.next;
        head.next = pre;
        pre = head;
        head = next;
    }
    return pre;
}