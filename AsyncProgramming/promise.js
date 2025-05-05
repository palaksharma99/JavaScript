// let pr = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("promise resolved data");
//     },3000);

// })   
// console.log(pr);

// let pro = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         rej("promise resolved data");
//     },3000);

// })

// console.log(pro);

// let promis = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("promise resolved data");
//     },3000);

// })

// console.log(promis);


// pr
//     .then((x)=>{
//         console.log(x);
//     })

//     .catch((x)=>{
//         console.log(x);
//     })

// console.log("end");

// function check(kalmilneayega){
//     let per= new Promise((res,rej)=>{
//         setTimeout(()=>{
//             if(kalmilneayega){
//                 res("aaaaaaaa");
//             }
//             else{
//                 rej("bbbbbbbb");
//             }
//         },4000)
//     })
//     return per;
// }
// check(true)
//     .then(()=>{
//         console.log(x)
//     })
//     .catch((x)=>{
//         console.log(x);
//     })
// console.log(x); 

async function fun(){
    let x = "hello";
    return x;
}

let y= fun();

console.log(y)