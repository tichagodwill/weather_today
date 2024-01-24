
searchInput = document.querySelector(".input");
searchBtn = document.querySelector(".btn");


async function fetchData(city) {

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e4a932663c53c2716b0c3c5662284934&units=metric`);
    const data = await response.json();
    console.log(data);

    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/hr";
  } catch (error) {
    console.log("Error found", error);
  }
}
searchBtn.addEventListener("click", () => {
    fetchData(searchInput.value);
  });