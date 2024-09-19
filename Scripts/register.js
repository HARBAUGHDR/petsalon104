console.log("Register");

let pets=[];//empty array

//object literal
let pet1={
    name:"Moka",
    age:1,
    gender:"Female",
    breed:"Mixed"
}

let pet2={
    name:"Macchi",
    age:2,
    gender:"Male",
    breed:"Boxer"
}

//push pets into the array
pets.push(pet1,pet2);

function displayNames(){
    console.log("Total pets = " + pets.length);
    console.log(pets[0].name);
    console.log(pets[1].name);
}

displayNames();