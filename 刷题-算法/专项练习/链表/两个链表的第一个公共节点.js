// 输入两个链表，找出它们的第一个公共节点。

// 如果两个链表没有交点，返回 null.
// 在返回结果后，两个链表仍须保持原有的结构。
// 可假定整个链表结构中没有循环。
// 程序尽量满足 O(n) 时间复杂度，且仅用 O(1) 内存。

// 输入：intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
// 输出：Reference of the node with value = 2
// 输入解释：相交节点的值为 2 （注意，如果两个列表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [0,9,1,2,4]，链表 B 为 [3,2,4]。在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。

function getIntersectionNode(headA, headB) {
    let set = new Set();

    while (headA !== null) { //讲链表A的节点全部存放到set集合里边
        set.add(headA);
        headA = headA.next;
    }

    while (headB !== null) { //访问链表B的节点，判断集合中是否包含链表B的节点，包含就直接返回
        if (set.has(headB)) {
            return headB;
        }
        headB = headB.next;
    }
    // 若set不包含链表B的任何一个节点，说明没有交点
    return null;
}

function getIntersectionNode(headA, headB) {
    let p1 = headA;
    let p2 = headB;
    while (p1 !== p2) {
        p1 = p1 === null ? headB : p1.next;
        p2 = p2 === null ? headA : p2.next;
    }
    return p1;

}