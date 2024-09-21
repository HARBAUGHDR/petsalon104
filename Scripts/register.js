// Store pets in an array
let pets = [];

// Constructor for Pet object
function Pet(name, age, gender, breed, color, temperment, weight, type) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.color = color;
    this.temperment = temperment;
    this.weight = weight;
    this.type = type;
}

// Function to register the pet
function registerPet() {
    const name = $('#txtName').val();
    const age = $('#txtAge').val();
    const gender = $('#txtGender').val();
    const breed = $('#txtBreed').val();
    const color = $('#txtColor').val();
    const temperment = $('#txtTemperment').val();
    const weight = $('#txtWeight').val();
    const type = $('#petType').val();

    // Create a new pet object
    const newPet = new Pet(name, age, gender, breed, color, temperment, weight, type);
    pets.push(newPet); // Add pet to the pets array

    // Display the newly added pet
    displayPets();
    
    // Clear form after submission
    $('#petForm')[0].reset();
}

// Function to display registered pets
function displayPets() {
    const petList = $('#petList');
    petList.empty(); // Clear the list

    // Loop through the pets array and display each pet
    pets.forEach((pet, index) => {
        const petItem = `
            <li class="list-group-item">
                <strong>${pet.name}</strong> - ${pet.breed} (${pet.age} years old, ${pet.type})
                <p>Color: ${pet.color}, Temperament: ${pet.temperment}, Weight: ${pet.weight} lbs</p>
            </li>
        `;
        petList.append(petItem);
    });
}

// jQuery function to handle form submission
$(document).ready(function() {
    $('#petForm').submit(function(event) {
        event.preventDefault(); // Prevent form submission
        registerPet(); // Register the pet
    });
});