/* LESSON 3 - Programming Tasks */

// Profile Object


let myProfile = {};


myProfile.name = "Marcos Gama";


myProfile.photo = "w02-task/images/me.jpeg";


myProfile.favoriteFoods = ["Pizza", "Spaguetti", "Ice Cream"];


myProfile.hobbies = ["Reading", "Study", "Hiking"];


myProfile.placesLived = [];


myProfile.placesLived.push({ place: "São Paulo, Brazil", length: "2 years" });

// DOM Manipulation - Output

// Name

document.getElementById("name").textContent = myProfile.name;

// Photo with attributes

document.getElementById("photo").src = myProfile.photo;

document.getElementById("photo").alt = myProfile.name;

// Favorite Foods List

myProfile.favoriteFoods.forEach(function(comida) {
   
    let itemLista = document.createElement("li");
    
    itemLista.textContent = comida;

    document.getElementById("favorite-foods").appendChild(itemLista);
});

// Hobbies List

myProfile.hobbies.forEach(function(hobby) {
    let itemLista = document.createElement("li");
    itemLista.textContent = hobby;
    document.getElementById("hobbies").appendChild(itemLista);
});

// Places Lived DataList

myProfile.placesLived.forEach(function(local) {
 
    let termo = document.createElement("dt");
    termo.textContent = local.place;
  
    let descricao = document.createElement("dd");
    descricao.textContent = local.length;

    document.getElementById("places-lived").appendChild(termo);
    document.getElementById("places-lived").appendChild(descricao);
});