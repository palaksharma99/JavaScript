// /*var x= 50;
// x++;
// function fun(){
//     var a =10;
//     function inner(){
//         var x=20;
//         console.log(x);
//         console.log(a);
//     }
    
// }
// fun()*/

// /*str = "This is a JS lecture";
// console.log(str);
// var a = str.split(" ");
// console.log(a);*/

// var obj = {
//     'name' : 'abhay',   // in place of name you can write full name also
//     age : 45,
//     city : 'delhi'
// }
// console.log(obj);
// console.log(obj.age);

// for(var key in obj){
//     console.log(key)
// }

// for(var i in obj){
//     console.log(i)  // i is the key.
// }

// for(var key in obj){
//     console.log(key)
//     console.log(obj.key)
// }

//  var money = 1000000;
// var str = `i have ${money} rs`
// console.log(str) 

// var arr = [3,4,6,"qwer"];
// for(var i = 0 ;i < arr.length ; i++){
//     console.log(arr[i])
// }

// var x = [1,32,45,67,62];
// for(var item of x){
//     console.log(item)
// }

// for(var i in x){    // give the index not the value
//     console.log(i)
// }


// function outer(){
//     var m=50;
//     function inner(){
//         var a =10;
//         console.log(a);
//         console.log(m);
//     }
//     return inner;
// }
// var x = outer();
// x();

//QUESTION 1
// var a= 20;
// var x = 50;

// function outer(){
//     var x =40;
//     function inner(){
//         var a =30;
//         console.log(a);
//         x++;
//         console.log(x);
//     }
//     return inner;
// }
// var p= outer();
// p();
// p();

// var x = outer();
// x();

//QUESTION 2
function outerfun(){
    var m=150;
    function innerfun(){
        m++;
        var a =10;
        function innermostfun(){
            m++;
            a++;
            console.log('money:',m, 'a :',a);
        }
        return innermostfun;
    }
    return innerfun;
}
var fun = outerfun();
var fun1 = fun();
var fun2 = fun();
fun1();
fun1();
fun2();
fun2();
fun2();
fun1();

