const head = document.getElementById('head');

// head.addEventListener('click',()=>{
//     console.log('clicked!');
// })

// head.addEventListener('clcik',(e)=>{
//     console.log(e.target);
//     e.target.style.border = "2px solid green";
//     e.target.style.backgroundColor = "aqua"
// })

head.addEventListener('mouseenter',(e)=>{
    e.target.style.color = "blue";
})

head.addEventListener('mouseleave',(e)=>{
    e.target.style.color = "black";
})

// head.addEventListener('copy',(e)=>{
//     e.target.innerText = "innerText is copied";  //it will not allow to copy
// })
const btn = document.querySelector('#btn');

btn.addEventListener('click',()=>{
    
})
