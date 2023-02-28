const id = sessionStorage.getItem("caracterId");
var repos = $(".repos");
var result = [];

fetch("https://rickandmortyapi.com/api/character/", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => {
    return response.json();
  })

  .then((response) => {
    console.log(response);

    repos.html("");
    response.results[i].forEach(function (index) {
      if (index.image == null) {
        newImage = "./418372.jpg";
      } else {
        newImage = index.image;
      }
      var newCard = $(
        `<div id="InfoDate">
        <h1 style="text-align:center"><span id="title" >Title:</span> ${index.name}</h1>
         <div class="row d-flex justify-content-center">
         <div class="col-lg-4 col-md-6 col-sm-12 " style="margin-top:5rem">
             <img src="${newImage}" class="img-thumbnail" alt="no Image" id="noImage" style='width:20rem'>
         </div>
         <div class="col-lg-4 col-md-6 col-sm-12 " style="margin-top:5rem">
             <h3>Location</h3>
             <div id="sesons">${index.species}</div>
             <h3>Status</h3>
             <div id="cast">${index.status}</div>
         </div>
         </div>
     </div>
      `
      );
      repos.append(newCard);
    });
  });
