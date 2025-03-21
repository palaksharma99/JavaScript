let arr = [
    {firstName:'govind',lastName:'jha',age:25},
    {firstName:'aman',lastName:'sharma',age:76},
    {firstName:'amar',lastName:'singh',age:20},
    {firstName:'raj',lastName:'kumar',age:25},
]

let ageCount = arr.reduce((acc, person) => {
    acc[person.age] = (acc[person.age] || 0) + 1;
    return acc;
}, {});


console.log(ageCount);

let countorder = arr.reduce((acc, pn) => {
    if(acc[pn.age]){
        acc[pn.age] = acc[pn.age]+1;
    }
    else{
        acc[pn.age]=1;;
    }
    return acc;
}, {});

console.log(countorder);
