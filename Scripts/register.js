let pets=[];//empty array
// create the Constructor
//<-------parameters are local------>
function Pet(name,age,gender,breed,color,temperment,weight){
    //property=parameters
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.color=color;
    this.temperment=temperment;
    this.weight=weight;
}

//get the inputs
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputTemperment = document.getElementById("txtTemperment");
let inputWeight = document.getElementById("txtWeight");
let inputColor = document.getElementById("txtColor");

function register(){
    console.log("Register function");
    console.log(inputName.value,inputWeight.value,inputColor.value,inputAge.value,inputGender.value,inputBreed.value,inputTemperment.value)
//creat an obj
let newPet = new Pet(inputName.value,inputWeight.value,inputColor.value,inputAge.value,inputGender.value,inputBreed.value,inputTemperment.value);
pets.push(newPet)
//display on the console the new pet
console.log(newPet); 
}


function init(){
    console.log("Init fn");//start the carousel of images
    let Gamora = new Pet("Gamora,75,Brindle,2,female,German,playful");
    pets.push(Gamora);
    let Thanos = new Pet("Thanos,100,Brindle,6,German,Timid");
    pets.push(Thanos);
    let Ryder = new Pet("Ryder,45,Black,13,Beagle,Happy");
    pets.push(Ryder);
    let Nebula = new Pet("Nebula,45,Merle,3,Aussie,Energetic");
    pets.push(Nebula);
    console.log("init fn");
}


window.onload=init;//waits to register the line

console.log("last line");






 






