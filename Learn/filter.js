let arr = [5,9,8,6,4,111,2,3,4,88,96,85,99,90,91];

let evearray = arr.filter((val) =>{
    return val%2===0;
})

console.log(evearray);

//previous index and current index
//will traverse the whole array
let redu = arr.reduce((i,j)=>{
    if(i>j){
        return i;
    }
    else{
        return j;
    }
})

console.log(redu);

let marks = arr.filter((v)=>{
    return v>90;
})
console.log(marks);

let array = [1,2,3,4];
array.forEach((i)=>{
    console.log(i*i);
});