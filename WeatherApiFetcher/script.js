function getWeather(city){
    let apikey = "4bac5c0669d8cf21a6cf921da2513c80";

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`)
    .then(raw => {
        if(!raw.ok){
            throw new Error("Error fetching data");
        }
        return raw.json();
    })
    .then(result => {
        document.getElementById("result").innerHTML=`
         <h3>${result.name} 📍</h3>
         <p>Temp:${result.main.temp} °C 🌡️</p>
         <p>Weather:${result.weather[0].description} >🌥️ </p>
        <p>Wind Speed: ${result.wind.speed} m/s >🌬️ </p>`;


    })
    .catch(err => {
        document.getElementById("result").innerHTML="city not found!";
    });
}

function handleSearch(){
    let city=document.getElementById("cityInput").value
    getWeather(city);
}
