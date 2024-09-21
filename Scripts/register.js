console.log("Register");

let pets=[];//empty array

//object literal
let pet1={
    name:"Thanos",
    age:"2",
    gender:"Male",
    breed:"German Shephard",
    temperment:"Playful",
    color:"Brindle",
    weight:"85 lbs"
}

let pet2={
    name:"Gamora",
    age:"2",
    gender:"Female",
    breed:"German Shephard",
    temperment:"Anxious",
    color:"Brindle",
    weight:"75 lbs"
}

    let pet3={
    name:"Ryder",
    age:"12",
    gender:"Male",
    breed:"Beagel mix",
    temperment:"Calm",
    color:"Brindle",
    weight:"25 lbs"
    }
    let pet4={
        name:"Nebula",
        age:"2",
        gender:"Female",
        breed:"Austrialian Shephard",
        temperment:"Friendly",
        color:"Merle",
        weight:"45 lbs"
        }

//push pets into the array
pets.push(pet1,pet2,pet3,pet4);

    function displayNames(){
    console.log("Total pets = " + pets.length);
    for(let i=0;i<pets.length;i++){
         //console.log(pets[i].name);
         document.getElementById("petsNames").innerHTML+="<p> " +pets[i].name + "</p>";
    }  
}

displayNames();