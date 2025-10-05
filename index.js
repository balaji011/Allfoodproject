// let myCoffe = new Promise((reslove, reject) => {
//     let coffeMAchine = false;
//     setTimeout(() => {
//         if (coffeMAchine) {
//             const orderDetails = { amount: 20 }
//             reslove({message: "Give the customer coffe",orderDetails})
//         }
//         else {
//             reject("The coffe machine is broken")
//         }
//     }, 1000)
// })
// console.log("ordering coffe");
// myCoffe.then((result) => {
//     console.log(result.message);
//     console.log(result.orderDetails);
// }).catch((msg)=>{
//     console.log(msg);
// })
// console.log("Thank you for visisting");
/* function wait(duration){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
        },duration)
    })
}
wait(1000).then(()=>{
     console.log(3);
     return wait(1000)
}).then(()=>{
    console.log(2);
    return wait(1000)
}).then(()=>{
    console.log(1);
    return wait(1000)
}).then(()=>{
    console.log("Happy New Year");
}) */

/* class car{

}
const myCar=new car()
myCar.propertyName;
myCar.callFunction() */

const p1=Promise.resolve("Success");
const p2=Promise.reject("Fail");
const p3=Promise.resolve("Success");

Promise.allSettled([p1,p2,p3]).then((result)=>{
    console.log(result);
})

console.log('Start'); 

setTimeout(() => console.log('Timeout 1'), 1000); 

Promise.resolve().then(() => console.log('Promise 1')); 

console.log('End');