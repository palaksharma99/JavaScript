let Btn = document.querySelector("#btn");
let Body = document.querySelector("body");
// Btn.onclick = ()=>{
//     // Btn.style.backgroundColor="white";
//     // Btn.style.color="black";
//     // Body.style.backgroungColor="white";
//     // Body.style.color="black";
//     console.log("Clicked!");
// }
let mode = "light";
Btn.addEventListener("click",()=>{
    if(mode === "light"){
        mode = "dark";
        // Body.style.backgroundColor="black";
        Body.classList.add("dark");
        Body.classList.remove("light");
    }
    else{
        mode = "light";
        // Body.style.backgroundColor="white";
        Body.classList.add("light");
        Body.classList.remove("dark");
    }
    console.log(mode);
})