// const btn = document.querySelector(".btn");
// const list = document.querySelector(".list");
// const input = document.querySelector(".input");
// async function fun() {
//     try {
//         const data = await fetch("http://universities.hipolabs.com/search?country=United+States");
//         const l = await data.json();
//         console.log(l);
//         let name =input.value
//         // name=name.toUpperCase();
//         console.log(name);
//         for (let i = 0; i < l.length; i++) {
//             // console.log(l[i]);
//             // if(l[i].country ===(name)){
//                 const li = document.createElement("li");
//                 li.innerText = l[i].name;
//                 list.appendChild(li);
//             // }
//         }
//     } catch (error) {
//         console.log(error, " error has occured ");
//     }
// }

// 

const btn = document.getElementById("btn");
const url = "http://universities.hipolabs.com/search?country=United+States&name=";

btn.addEventListener('click', () => {
    const inp = document.getElementById('inp').value.trim();
    const URL = url + encodeURIComponent(inp);

    // Clear previous results
    document.querySelector('.name').innerHTML = "";
    document.querySelector('.state').innerHTML = "";
    document.querySelector('.webpage').innerHTML = "";

    // Fetch data from the API
    fetch(URL)
        .then((res) => res.json())
        .then((datas) => {
            if (datas.length === 0) {
                alert("No results found!");
                return;
            }
            // Append data to the respective elements
            for (let data of datas) {
                const p1 = document.createElement('p');
                p1.innerText = data.name;

                const p2 = document.createElement('p');
                p2.innerText = data["state-province"] || "N/A";

                const a = document.createElement('a');
                a.innerText = data["web_pages"][0];
                a.setAttribute('href', data["web_pages"][0]);
                a.setAttribute('target', '_blank');

                // Append elements to the page
                document.querySelector('.name').appendChild(p1);
                document.querySelector('.state').appendChild(p2);
                document.querySelector('.webpage').appendChild(a);
            }
        })
        .catch((err) => {
            console.error("Error:", err);
        });
        
});
