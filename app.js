let apiCall = function(city) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=fr&appid=8475734dab43b0c24fc0841348677ed1`
    fetch (url)
    .then(response => response.json())
    .then(data => {
        document.getElementById('tabVille').innerHTML = data.name;
        document.getElementById('tabTemp').innerHTML = "<i class='fas fa-thermometer-half'></i> " + data.main.temp + "°";
        document.getElementById('tabHum').innerHTML = "<i class='fas fa-tint'></i> " + data.main.humidity + " %";
        document.getElementById('tabVent').innerHTML = "<i class='fas fa-wind'></i> " + data.wind.speed + " km/h";
        console.log(data)
    })
    .catch( err =>
        console.log("Code erreur : " + err))
}

document.querySelector('form').addEventListener("submit", function(event) {
    event.preventDefault();
    let city = document.getElementById('inputVille').value;
    apiCall(city);

})

apiCall("Nantes");