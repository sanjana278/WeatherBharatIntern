document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'f18b0ca34066eb4e413e798899c7995d'; 
  
    const cityInput = document.getElementById('city-input');
    const submitButton = document.getElementById('submit-button');
    const cityOutput = document.getElementById('city-output');
    const descriptionOutput = document.getElementById('description');
    const tempOutput = document.getElementById('temp');
    const windOutput = document.getElementById('wind');
  
    submitButton.addEventListener('click', function() {
      const cityName = cityInput.value;
      if (cityName.trim() !== '') {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
          .then(response => {
            if (!response.ok) {
              throw new Error('City not found');
            }
            return response.json();
          })
          .then(data => {
            cityOutput.textContent = data.name;
            descriptionOutput.textContent = data.weather[0].description;
            tempOutput.textContent = `Temperature: ${data.main.temp}°C`;
            windOutput.textContent = `Wind Speed: ${data.wind.speed} m/s`;
          })
          .catch(error => {
            console.error('Error fetching weather data:', error);
            cityOutput.textContent = 'Error: City not found';
            descriptionOutput.textContent = '';
            tempOutput.textContent = '';
            windOutput.textContent = '';
          });
      } else {
        alert('Please enter a city name');
      }
    });
  });
  
