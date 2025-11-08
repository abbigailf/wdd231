// Display current year and last modified date
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Example placeholder weather data (optional)
const weatherInfo = document.getElementById("weather-info");
const forecast = document.getElementById("forecast");

if (weatherInfo) {
  weatherInfo.innerHTML = `
    <p>49°F - Partly Cloudy</p>
    <p>High: 55°F | Low: 28°F</p>
    <p>Humidity: 53%</p>
  `;
}

if (forecast) {
  forecast.innerHTML = `
    <li>Today: 55°F</li>
    <li>Sunday: 57°F</li>
    <li>Monday: 58°F</li>
  `;
}

// Grid/List view toggle
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const membersContainer = document.querySelector("#members");

if (gridButton && listButton && membersContainer) {
  gridButton.addEventListener("click", () => {
    membersContainer.classList.add("grid-view");
    membersContainer.classList.remove("list-view");
    gridButton.classList.add("active");
    listButton.classList.remove("active");
  });

  listButton.addEventListener("click", () => {
    membersContainer.classList.add("list-view");
    membersContainer.classList.remove("grid-view");
    listButton.classList.add("active");
    gridButton.classList.remove("active");
  });
}