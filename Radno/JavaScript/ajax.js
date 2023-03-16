function getDogImage() {
  var request = $.ajax({
    url: "https://dog.ceo/api/breeds/image/random",
    method: "GET",
  });
  request
    .done(function (response) {
      console.log(response);
      var img = $("<img/>").attr("src", response.message);
      $("#getImage").html("");
      $("#getImage").append(img);
    })
    .fail(function (response) {
      console.log(response)
    })
    .always(function (response) {
      console.log("zahtev zavrsen")
    });
}
