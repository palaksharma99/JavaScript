let head = document.querySelector("#heading");
head.innerText = head.innerText + "Hi";
head.append(" From Apna College");

let boxes = document.querySelectorAll(".box");
console.log(boxes[0]);
console.log(boxes[1]);
console.log(boxes[2]);

boxes[0].innerText = "new val 1";
boxes[1].innerText = "new val 2";
boxes[2].innerText = "new val 3";

boxes.forEach((i)=>{
    i++;
    return i.innerText = `val ${i}`;
});

const body = document.querySelector("body");
const color = document.getElementById("btn");
color.style.backgroundColor="black";
color.style.color="white";
color.style.borderColor="white";
body.style.backgroundColor="black";
body.style.color="white";

let newbtn = document.createElement("button");
newbtn.innerText = "New Button";
newbtn.style.backgroundColor="white";
body.prepend(newbtn);

boxes[1].remove();

let MyBtn = document.createElement("button");
MyBtn.style.color="white";
MyBtn.style.backgroundColor="red";
MyBtn.style.borderColor="white";
// MyBtn.style.height="60px";
// MyBtn.style.width="60px";
MyBtn.innerText="Click Me!";
body.append(MyBtn);

//classList can add a new class without replacing the old class.

