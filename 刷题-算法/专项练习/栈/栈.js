// class Stack {
//     constructor() {
//         this.data = []
//     }
//     push(x) {
//         this.data.push(x)
//     }

//     pop(x) {
//         if (this.empty())
//             return this.data.pop();
//     }

//     top() {
//         return this.data[this.size() - 1]
//     }
//     size() {
//         return this.data.length
//     }
//     empty() {
//         return this.size() === 0
//     }
// }

function Stack() {
    var items = [];
    this.push = function(item) {
        items.push(item);
    }
    this.pop = function() {
        return items.pop();
    }
    this.isEmpty = function() {
        return items.length === 0;
    }
}