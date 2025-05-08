let s = prompt("Enter a string: ");
// function countvowels(s){
//     let count =0;
    
//     for(let v of s){
//         if(v==='a' || v==='e' || v==='i' || v==='o' || v==='u'){
//             count++;
//         }
//     }
//     return count;
// }

//whenever you are calling the function you should pass the parameter if the value is user based like this one


const CV = (s) =>{
    let c = 0;
    for(let i of s){
        if(i==='a' || i==='e' || i==='i' || i==='o' || i==='u'){
            c++;
        }
    }
    return c;
}

console.log(CV(s));