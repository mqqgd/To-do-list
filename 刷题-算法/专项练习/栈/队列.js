function Queue(arr) {
    this.push = function(ele) {
        return arr.push(ele);
    }
    this.pop = function() {
        return arr.shift();
    }
    this.size = function() {
        return arr.length;
    }
    this.display = function() {
        console.log(arr)
    }

}
var arr1 = [];
var queue = new Queue(arr1);
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
https: //www.jb51.net/article/130500.htm