import { Character } from "./entitie.js";

const id = sessionStorage.getItem("caracterId");
const url = `https://rickandmortyapi.com/api/character/${id}`;
var repos = $(".repos");
var result = [];

fetch(url)
  .then((response) => {
    return response.json();
  })

  .then((response) => {
    console.log(response);
    repos.html("");
    const imageSrc = response.image
      ? response.image
      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjmhOQIdkehQclCNlvATZe4QCQoaBPRVftOSbW0E4xxnWmvc4r8Q";
    const character = new Character(
      response.id,
      response.name,
      response.gender,
      response.status,
      response.species,
      imageSrc
    );
    const episode = response.episode.length;
    var newCard = $(
      `<div id="InfoDate">
        <h1 style="text-align:center"><span id="title" >Title:</span> ${character.name}</h1>
         <div class="row d-flex justify-content-center">
         <div class="col-lg-4 col-md-6 col-sm-12 " style="margin-top:5rem">
             <img src="${imageSrc}" class="img-thumbnail" alt="no Image" id="noImage" style='width:20rem'>
         </div>
         <div class="col-lg-4 col-md-6 col-sm-12 " style="margin-top:5rem">
             <h3>Species</h3>
             <div id="species">${character.species}</div>
             <h3>Status</h3>
             <div id="status">${character.status}</div>
             <h3>Gender</h3>
             <div id="gender">${character.gender}</div>
             <h3>Episode</h3>
             <div id="episode">${episode}</div> 
         </div>
         </div>
     </div>
      `
    );
    repos.append(newCard);
  });
