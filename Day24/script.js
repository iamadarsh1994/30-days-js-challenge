//task3. use the fetch api to get current weather data from a public weather api (e.g., Openweather api). Log the response data to the console. 
// i will add the data to the page. 


const city = document.getElementById("inputs");
const para = document.getElementById("container");
const button = document.getElementById("btn");

button.addEventListener('click', function() {
    // console.log('hey');
    // para.innerHTML = city.value;

    function getFetch() {
        const cityName = city.value;
        const apiKey = "-------";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                // console.log(data); // This will log the weather data
                const description = data.weather[0].description;
                const temperature = data.main.temp; // Temperature in Celsius
                const windSpeed = data.wind.speed; 
                para.innerHTML = `Weather in ${cityName}: ${description}. Temperature: ${temperature}°C. Wind Speed: ${windSpeed} m/s.`;

            })
            .catch(error => { 
                // console.error('There was a problem with the fetch operation:', error);
                para.innerHTML = 'Error: Please enter a correct city name.';

            });
    }

    getFetch();
});
