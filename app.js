const key = 'c2678ede9c1a084281d9a64731d3f724';
var cityName = document.querySelector('#cityName');
const openWeather = async (cityName) => {

   var url = 'https://api.openweathermap.org/data/2.5/weather?q=';
   var query = `${cityName}&units=metric&APPID=${key}`;
   const response = await fetch(url + query);
   const data = await response.json();
   	 updateUI(data); 
};


function updateUI(data) {
	document.querySelector('#city-info').style.display="block";
//temperature
	var temperature = document.querySelector('#temp');
	temperature.innerHTML = data.main.temp;

//city name
var name = document.querySelector('#city-name');
	name.innerHTML = data.name;

//weather
var weather = document.querySelector('#weather');
	weather.innerHTML = data.weather[0].description;

// wind
var wind = document.querySelector('#wind');
	wind.innerHTML = data.wind.speed +' m/s';

//pressure
var pressure = document.querySelector('#pressure');
	pressure.innerHTML = data.main.pressure+' hPa';

//humidity
var humidity = document.querySelector('#humidity');
	humidity.innerHTML = data.main.humidity+' %';

}


city.addEventListener( 'submit' , e => {
	e.preventDefault();

   var cityForm = document.querySelector('#cityName');
   cityName = cityForm.value.trim();
    city.reset();
   openWeather(cityName)
  
  
});


