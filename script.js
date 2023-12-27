const API_KEY = "8f0b752df4e4588022d75e20ea29bff6"
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const inputBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather-icon')
const weatherApp = document.querySelector('.weather-details')
const error = document.querySelector('.error')

async function checkWeather(city){
    const res = await fetch(API_URL + city + `&appid=${API_KEY}`)
    if(res.status == 404){
        error.style.display = 'block'
        weatherApp.style.display = "none";
    }else{
        const data = await res.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML =
          data.main.humidity + "%";
        document.querySelector(".wind").innerHTML =
          Math.round(data.wind.speed) + " Km/h";
        document.querySelector(".temp").innerHTML =
          Math.round(data.main.temp) + "°C";

        if (data.weather[0].main == "Clouds") {
          weatherIcon.src = "./clouds.png";
        } else if (data.weather[0].main == "Clear") {
          weatherIcon.src = "./clear.png";
        } else if (data.weather[0].main == "Rain") {
          weatherIcon.src = "./rain.png";
        } else if (data.weather[0].main == "Drizzle") {
          weatherIcon.src = "./drizzle.png";
        } else if (data.weather[0].main == "Mist") {
          weatherIcon.src = "./mist.png";
        }

        weatherApp.style.display = "block";
        error.style.display = "none";
    }

    

}

searchBtn.addEventListener('click',() => {
checkWeather(inputBox.value);
})