function ListNode(val) {
    this.val = val;
    this.next = null;
}

// 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。
// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。

// 迭代法
// function reverseList(head) {
//     let pre = null;
//     let next = null;

//     while (head) {
//         next = head.next;
//         head.next = pre;
//         pre = head;
//         head = next;
//     }
//     return pre;
// }

// 递归法
function reverseList(head) {
    if (head == null || head.next == null) return head;
    let last = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return last;
}

let head = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5
                }
            }
        }
    }
}

// function printList(head) {
//     while (head) {
//         console.log(head.val + '')
//         head = head.next;
//     }
//     return head;
// }

let res = reverseList(head);
console.log(res);
// let res1 = printList(res)
// console.log(res1)