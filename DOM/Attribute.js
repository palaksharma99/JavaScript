//for id or any other
const para = document.querySelectorAll('p')[1];
para.style.border = "2px solid red";
para.setAttribute('class','spclpara');
para.setAttribute('id','spclpara');

// img.setAttribute(src="reddish-maple-leaf-189738.webp");
// img.style.height="150px";
// console.log(img.getAttribute('src'));
// img.removeAttribute('src');


const paragraph = document.querySelectorAll('p')[3];
paragraph.setAttribute('class','one');
paragraph.setAttribute('class','two');

//for Classes
//classList is add and remove toggle
paragraph.classList.add('one');
paragraph.classList.remove('two');
paragraph.classList.toggle('two'); //if two is present then it will remove it and if two is not present then it will add it this is toggle


//for index.html part in this
const spclCity = document.querySelector('#spclCity');
spclCity.style.border="2px solid green"
console.log(spclCity.previousElementSibling);
spclCity.previousElementSibling.style.color="yellow";
spclCity.nextElementSibling.style.color="blue";

spclCity.previousElementSibling.previousElementSibling.border = "red";
console.log(spclCity.parentElement);
spclCity.parentElement.border = "3px solid green";
const ul = spclCity.parentElement;
console.log(ul.children[1]);
ul.children[1].style.color="pink";

const li = document.createElement('li');
li.innerText="Mumbai";
console.log(li);
ul.append(random);
ul.appendChild(li);

innerText
innerhtml