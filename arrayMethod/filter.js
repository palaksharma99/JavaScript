var arr=[1,23,4,5,6]

arr.filter((value,index,arr)=>{
    console.log(value)
})

arr.filter((value,index,arr)=>{
    console.log(arr)
})

arr.filter((value,index,arr)=>{
    console.log(index)
})

var x = arr.filter((value,index,arr)=>{
    
})
console.log(x)

var x = arr.filter((value,index,arr)=>{
    return true
})
console.log(x)

var x = arr.filter((value,index,arr)=>{
    return false
})
console.log(x)

var x = arr.filter((value,index,arr)=>{
    if(value%2===0){
        return true
    }
})
console.log(x)

var x = arr.filter((value,index,arr)=>{
    if(value%2!==0){
        return true
    }
})
console.log(x)


var a= (value,index,arr)=>{
    if(value%2==0){
        return true
    }
}
var x = arr.filter(a)
console.log(x)