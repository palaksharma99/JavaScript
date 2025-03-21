
//error comes if you will return two components in one return

import { useState } from "react";

function counter(){
    let[count,setCount] = useState(15)
    setCount(20)

    // let count = 15;
    let addCounter = ()=>{
        // count += 1;
        // console.log(count);
        setCount(count+1) //istead use this1    
    }
    let removeCounter = ()=>{
        setCount(count - 1);
    }
    return(
        <>
        <h1>count is {count}</h1> 
        <button onClick={addCounter} >Add Count</button>
        <button onClick={removeCounter} >Decrease count</button>
        </>
    )
}


export default counter;