const head = document.getElementById('head');
console.log(head);
head.style.color='red';
head.style.border='5px dashed green';
head.innerText='Changed text'

const favCity = document.getElementsByClassName('favCity');
console.log(favCity);

for(let city of favCity){
    city.style.color='yellow';
}
// document.getElementsByTagName(); ---> used for tags like anchor tag iframe etc.

const btn = document.querySelector('#btn');   //select id class and tag at the same time.
btn.addEventListener('click',()=>{
    console.log('clicked!');
fetch('https://official-joke-api.appspot.com/random_joke')
    .then((res)=>{
        // console.log(res);
        return res.json();
    })
    .then((data)=>{
         console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    }) 
})