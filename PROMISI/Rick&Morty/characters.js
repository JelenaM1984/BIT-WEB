var cardHolder = $(".cardholder");

fetch("https://rickandmortyapi.com/api/character", {
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
    cardHolder.html("");
    response.results.forEach(function (item) {
      if (item.image === null) {
        var randomImage = "./pexels-david-bartus-714926.jpg";
        var newCard = $(
          `<div class="col-lg-4 col-md-6 col-xs-12  mt-3">
            <div class="card" style="width:19rem">
                <img src="${randomImage}" class="img-thumbnail" alt="noImage" style="width 100%;height:430px">
                <div class='card-body'>
                    <h5 class='card-title' style="font-size:1.5rem">${item.name}</h5>

                    <a  onclick='goToDetail(${item.id})' class='btn btn-info' style="color:white;font-weight:bold;font-size:1rem">Details</a>
                </div>
            </div>
        </div>`
        );
        cardHolder.append(newCard);
      } else {
        var newCard = $(`<div class="col-lg-4 col-md-6 col-xs-12 mt-3">
    <div class="card" style="width:19rem">
        <img src="${item.image}" class="img-thumbnail" alt="image">
        <div class='card-body'>
            <h5 class='card-title' style="font-size:1.5rem">${item.name}</h5>
            <a href='./info.html'  onclick = 'getId(${item.id})' class = 'name'>More details</a>
            <button type="button" class="btn btn-success">Like</button>
            <a onclick='goToDetail(${item.id})">Details</a>
                </div>
    </div>
</div>`);
        cardHolder.append(newCard);
      }
    });
  });
function goToDetail(id) {
  sessionStorage.setItem("caracterId", id);
  location.assign("./info.html");
}
