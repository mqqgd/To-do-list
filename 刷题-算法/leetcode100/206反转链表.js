// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。

//双指针法
function reverseList(head) {
    let pre = null;
    let next = null;

    while (head) {
        next = head.next;
        head.next = pre;
        pre = head;
        head = next;
    }
    return pre;
}

//递归法
function reverseList(head) {
    if (head === null || head.next === null) return head;
    let last = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return last;
}