const apiKey = "e34b3202de610437c1042ebcfe325ec1";

// CURRENT WEATHER API
const url = `https://api.openweathermap.org/data/2.5/weather?lat=41.7110&lon=-112.1650&units=imperial&appid=${apiKey}`;

// FORECAST API
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=41.7110&lon=-112.1650&units=imperial&appid=${apiKey}`;


// ============================
// CURRENT WEATHER
// ============================
async function getWeather() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        // --- Standard Weather Display ---
        document.getElementById("current-temp").textContent = Math.round(data.main.temp);
        document.getElementById("weather-description").textContent = data.weather[0].description;
        document.getElementById("weather-icon").src =
            `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        // --- EXTRA WEATHER INFO (Wireframe) ---
        document.getElementById("high-temp").textContent = Math.round(data.main.temp_max);
        document.getElementById("low-temp").textContent = Math.round(data.main.temp_min);
        document.getElementById("humidity").textContent = data.main.humidity;

        // --- SUNRISE AND SUNSET FIX ---

        // Convert Unix timestamp to milliseconds
        const sunriseTimestamp = data.sys.sunrise * 1000;
        const sunsetTimestamp = data.sys.sunset * 1000;

        // Create Date objects
        const sunriseDate = new Date(sunriseTimestamp);
        const sunsetDate = new Date(sunsetTimestamp);

        // Format to a readable time string (e.g., 7:00 AM)
        const sunriseTime = sunriseDate.toLocaleTimeString("en-US", {
            hour: 'numeric',
            minute: '2-digit'
        });
        const sunsetTime = sunsetDate.toLocaleTimeString("en-US", {
            hour: 'numeric',
            minute: '2-digit'
        });

        // Output to HTML elements
        document.getElementById("sunrise").textContent = sunriseTime;
        document.getElementById("sunset").textContent = sunsetTime;

    } catch (error) {
        console.error("Weather API error:", error);
    }
}


// ============================
// 3-DAY FORECAST
// ============================
async function getForecast() {
    try {
        const response = await fetch(forecastURL);
        const data = await response.json();

        const forecastList = document.getElementById("forecast-list");
        forecastList.innerHTML = "";

        // Pick 3PM forecasts (15:00:00)
        const daily = data.list.filter(item => item.dt_txt.includes("15:00:00"));

        // Get next 3 days
        const threeDays = daily.slice(0, 3);

        threeDays.forEach(day => {
            const li = document.createElement("li");

            const date = new Date(day.dt_txt);
            const weekday = date.toLocaleDateString("en-US", { weekday: "long" });

            li.innerHTML = `
                <strong>${weekday}</strong>: 
                ${Math.round(day.main.temp)}°F, 
                ${day.weather[0].description}
            `;

            forecastList.appendChild(li);
        });

    } catch (error) {
        console.error("Forecast API error:", error);
    }
}


// RUN WEATHER + FORECAST
getWeather();
getForecast();