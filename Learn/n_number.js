let num = prompt("Enter :");
let arr = [];
for(let i=1; i<=num; i++){
    arr.push(i);
}
console.log(arr);

let prod = arr.reduce((pev,curr)=>{
    return pev*curr;
})
console.log(prod);


let array = [1,2,3,4];
let n = array.reduce((i,j)=>{
    return i+j ;
})
console.log(n);