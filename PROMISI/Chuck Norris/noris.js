function newJoke() {
  const requestUrl = "https://api.chucknorris.io/jokes/random";

  fetch(requestUrl)
    .then((response) => {
      return response.json();
    })

    .then((jsObject) => {
      console.log(jsObject.value);
      $("#newJokeText").text(jsObject.value);
    });
}
