// async function async1() {
//     console.log("async1 start");
//     await async2();
//     console.log("async1 end");
// }
// async function async2() {
//     console.log("async2");
// }
// async1();
// console.log("start")

//代码2
async function async1() {
    console.log("async1 start");
    // await async2();
    async2();
    console.log("async1 end");
    setTimeout(() => {
        console.log("timer1");
    }, 0)

}

async function async2() {
    setTimeout(() => {
        console.log("timer2");
    }, 0);
}
async1();
setTimeout(() => {
    console.log("timer3")
}, 0);
console.log("start")