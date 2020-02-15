baseUrl = "http://api.tvmaze.com/schedule";

fetch(baseUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        createCards(json);
    })
    .catch(function(error) {
        console.log(error);
    });

function createCards(json) {
  console.dir(json);
  let cardHome = document.querySelector(".cardHome")

  json.forEach(function(cards) {

    let html = "";
    html += `<div class="cards-container">

    <img class="cards-image" src="${cards.show.image.medium}" alt="Show Name" />
    <div class="cards-details">
        <h1 class="cards-name">${cards.show.name}</h1>
    <button clas="btn" href="#">click me</div>
    </div>

  </div>`

cardHome.innerHTML += html;

  });
}






