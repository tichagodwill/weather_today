




searchInput = document.querySelector(".input");
searchBtn = document.querySelector(".btn");
imageIcons = document.querySelector(".icon")
cityElement = document.querySelector(".city");
humidityElement = document.querySelector(".humidity")
windElement = document.querySelector('.wind')
desciptionElement = document.querySelector(".description")


async function fetchData(city) {

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e4a932663c53c2716b0c3c5662284934&units=metric`);
      if (res.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
      }else{
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
      }
    const data = await res.json();
    console.log(data);

    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    // document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    // document.querySelector(".wind").innerHTML = data.wind.speed + "Km/hr";
    cityElement.textContent = "Temperature in " + data.name; 
    humidityElement.textContent = "Humidity  " + data.main.humidity + "%";
    windElement.textContent = "Wind Speed  " + data.wind.speed + "Km/hr";
    desciptionElement.textContent = data.weather[0].description.toUpperCase();

// if(data.weather[0].main == "Clouds"){
//   imageIcons.src = "https://openweathermap.org/img/wn/01n.png"
// }else if (data.weather[0].main == "Clear"){
//   imageIcons.src ="https://openweathermap.org/img/wn/01d@2x.png"
// }


  } catch (error) {
    console.log("Error found", error);
  }
}
window.addEventListener("load", () => {
  const defaultCity = "Bahrain";
  fetchData(defaultCity);
});
searchBtn.addEventListener("click", () => {
    fetchData(searchInput.value);
  });
