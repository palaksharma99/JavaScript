let arr = [1,2,3,4,5];

arr.forEach(function print(i){
    console.log(i);
});

arr.forEach((i)=>{
    console.log(i*i);
});

let calSq = (i)=>{
    console.log(i*i);
}

arr.forEach(calSq);