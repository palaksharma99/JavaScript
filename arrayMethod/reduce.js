var arr=[34,54,75,13,11,4] //iterates the whoole array

arr.reduce((accumulator,item,index,arr)=>{
    console.log(accumulator)   //5 times iterate because 6 items in array, gives undefined because after single value it will mot print
})

arr.reduce((accumulator,item,index,arr)=>{
    console.log(accumulator)
    return accumulator+index   //ans=34,35,37,40,44
})

var x = arr.reduce((accumulator,item,index,arr)=>{
       return accumulator+index
})
console.log(x) //ans=49

arr.reduce((accumulator,item,index,arr)=>{
    console.log(accumulator)
    return accumulator+1   //ans=34,35,36,37,38
})

arr.reduce((accumulator,item,index,arr)=>{
    console.log(item)   //ans= starts from 1 index
})

arr.reduce((accumulator,item,index,arr)=>{
    console.log(index)  //ans=start from 0 index
},0)