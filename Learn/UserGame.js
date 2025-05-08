let n = 5;
let user = prompt("Guess the number: ");
while(user!==n){
    
    if(user<n){
        console.log("choose higher");
        break;
    }
    else if(user>n){
        console.log("choose lower");
        break;
    }
    else{
        console.log(`You guessed it right! :${n}`);
        break;
    }
}