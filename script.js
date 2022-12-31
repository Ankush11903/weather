const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9ebcb246e2msh74898c09d833210p128b76jsnf7b9d8e09c77',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city) => {
	city_name.innerHTML=city;
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response => {console.log(response)
		temperature.innerHTML=response.temp;
		// document.getElementsById(temperature2).innerHTML=response.temp;
		document.getElementById("temperature2").innerHTML=response.temp;
		// console.log(v)
	})
	.catch(err => console.error(err));
}
submit.addEventListener("click",(e)=>{
	// console.log("hey")
	e.preventDefault();
	getWeather(city.value);
})
getWeather("Delhi")



