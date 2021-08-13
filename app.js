var input = document.querySelector(".input-text");
var main = document.querySelector(".name");
var temp = document.querySelector(".temp");
var desc = document.querySelector(".desc");
var cloud = document.querySelector(".cloud");
var button = document.querySelector("#submit");

button.addEventListener("click",  function (name) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      input.value +
      "&units=metric&appid=50a7aa80fa492fa92e874d23ad061374"
  )
    .then((response) => response.json())
    .then((data) => {
      var tempValue = data["main"]["temp"];
      var nameValue = data["name"];
      var descValue = data["weather"][0]["description"];
      var cloudValue = data["clouds"]["all"];

      main.innerHTML = nameValue;
      desc.innerHTML = "Description == " + descValue;
      temp.innerHTML = "Temperature == " + tempValue + " °C";
      cloud.innerHTML = "Clouds == " + cloudValue;
      input.value = "";
    })
    .catch((err) => alert("Wrong City Name!"));
});
