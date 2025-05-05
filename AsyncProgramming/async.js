console.log('start');

console.log('mid');

console.log('end');

setTimeout(()=>{
    console.log('this will run 5 seconds late');
},5000);


console.log('start');

console.log('mid');

console.log('end');


// setTimeout has two parameters one is call back function second is timer
// and it does not run immediately, it will let the other function run first and then it will run itself


var date= new Date();
console.log(date);

var y = date.getTime();
console.log(y);    // gives time in millisecond from 1/1/1970 till today


console.log("hello");
while(new Date().getTime()<y+150){
    // console.log("it will run for 15 seconds (do 15000 for 15 s)");
}
console.log("world");

function getData(dataId, getNextData){

    setTimeout(()=>{
        console.log("data ",dataId);
        if(getNextData){
            getNextData();
        }
    },2000);
}

getData(1,()=>{   //2s
    getData(2,()=>{   //next 2s     iske bich me 5s vala bhi exicute ho jayega
        getData(3)   //next 2s
    });
})
