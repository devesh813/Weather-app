const apiKey = 'ec8cfbeced01a63898f428e696f0c297'; // Replace with your OpenWeather API key

function getWeather() {
    const city = document.getElementById('city').value;
    if (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    displayWeather(data);
                    setBackground(data.weather[0].main);
                } else {
                    alert('City not found');
                }
            })
            .catch(error => console.error('Error fetching the weather data:', error));
    } else {
        alert('Please enter a city name');
    }
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weather-info');
    const weatherIcon = document.getElementById('weather-icon');
    const weatherLink = document.getElementById('weather-link');
    const weatherIconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const weatherCondition = data.weather[0].main.toLowerCase();
    const { lon, lat } = data.coord;
    
    weatherIcon.src = weatherIconUrl;
    weatherIcon.classList.remove('hidden');
    weatherLink.href = `https://www.google.com/search?q=${weatherCondition}+weather`;

    weatherInfo.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>🌡️ Temperature: ${data.main.temp} °C</p>
        <p>🌤️ Weather: ${data.weather[0].description}</p>
        <p>💧 Humidity: ${data.main.humidity} %</p>
        <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
        <p><a href="https://www.google.com/maps/@${lat},${lon},12z" target="_blank">📍 Show on Map</a></p>
    `;
}

function setBackground(weatherCondition) {
    const body = document.body;
    switch(weatherCondition.toLowerCase()) {
        case 'clear':
            body.style.backgroundImage = "url('images/clear.jpg')";
            break;
        case 'clouds':
            body.style.backgroundImage = "url('images/clouds.jpg')";
            break;
        case 'rain':
            body.style.backgroundImage = "url('images/rain.jpg')";
            break;
        case 'snow':
            body.style.backgroundImage = "url('images/snow.jpg')";
            break;
        case 'thunderstorm':
            body.style.backgroundImage = "url('images/thunderstorm.jpg')";
            break;
        case 'drizzle':
            body.style.backgroundImage = "url('images/drizzle.jpg')";
            break;
        case 'mist':
        case 'fog':
            body.style.backgroundImage = "url('images/mist.jpg')";
            break;
        default:
            body.style.backgroundImage = "url('images/default.jpg')";
            break;
    }
}
