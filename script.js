const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '43e41649f8msh1309a6e428b0a32p13be99jsn8d27aaf6365d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city)=>{

    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {
        console.log(response)
        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML=response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML=response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML=response.wind_speed
        wind_degrees.innerHTML= response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
    })
	.catch(err => console.error(err));
}
submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Delhi")

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Indore',options)
	.then(response => response.json())
	.then((response) => {
        console.log(response)
        idr_cloud_pct.innerHTML = response.cloud_pct
        idr_temp.innerHTML = response.temp
        idr_feels_like.innerHTML = response.feels_like
        idr_humidity.innerHTML = response.humidity
        idr_min_temp.innerHTML = response.min_temp
        idr_max_temp.innerHTML = response.max_temp
        idr_wind_speed.innerHTML = response.wind_speed
        idr_wind_degrees.innerHTML= response.wind_degrees
        idr_sunrise.innerHTML = response.sunrise
        idr_sunset.innerHTML = response.sunset
 })
 .catch(err => console.error(err));//console.log(err)


 fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston',options)
 .then(response => response.json())
 .then((response) => {
     console.log(response)
     bos_cloud_pct.innerHTML = response.cloud_pct
     bos_temp.innerHTML = response.temp
     bos_feels_like.innerHTML = response.feels_like
     bos_humidity.innerHTML = response.humidity
     bos_min_temp.innerHTML = response.min_temp
     bos_max_temp.innerHTML = response.max_temp
     bos_wind_speed.innerHTML = response.wind_speed
     bos_wind_degrees.innerHTML= response.wind_degrees
     bos_sunrise.innerHTML = response.sunrise
     bos_sunset.innerHTML = response.sunset
})
.catch(err => console.error(err));//console.log(err)
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=lucknow',options)
 .then(response => response.json())
 .then((response) => {
     console.log(response)
     luck_cloud_pct.innerHTML = response.cloud_pct
     luck_temp.innerHTML = response.temp
     luck_feels_like.innerHTML = response.feels_like
     luck_humidity.innerHTML = response.humidity
     luck_min_temp.innerHTML = response.min_temp
     luck_max_temp.innerHTML = response.max_temp
     luck_wind_speed.innerHTML = response.wind_speed
     luck_wind_degrees.innerHTML= response.wind_degrees
     luck_sunrise.innerHTML = response.sunrise
     luck_sunset.innerHTML = response.sunset
})
.catch(err => console.error(err));//console.log(err)

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata',options)
 .then(response => response.json())
 .then((response) => {
     console.log(response)
     kol_cloud_pct.innerHTML = response.cloud_pct
     kol_temp.innerHTML = response.temp
     kol_feels_like.innerHTML = response.feels_like
     kol_humidity.innerHTML = response.humidity
     kol_min_temp.innerHTML = response.min_temp
     kol_max_temp.innerHTML = response.max_temp
     kol_wind_speed.innerHTML = response.wind_speed
     kol_wind_degrees.innerHTML= response.wind_degrees
     kol_sunrise.innerHTML = response.sunrise
     kol_sunset.innerHTML = response.sunset
})
.catch(err => console.error(err));//console.log(err)

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Agra',options)
 .then(response => response.json())
 .then((response) => {
     console.log(response)
     ag_cloud_pct.innerHTML = response.cloud_pct
     ag_temp.innerHTML = response.temp
     ag_feels_like.innerHTML = response.feels_like
     ag_humidity.innerHTML = response.humidity
     ag_min_temp.innerHTML = response.min_temp
     ag_max_temp.innerHTML = response.max_temp
     ag_wind_speed.innerHTML = response.wind_speed
     ag_wind_degrees.innerHTML= response.wind_degrees
     ag_sunrise.innerHTML = response.sunrise
     ag_sunset.innerHTML = response.sunset
})
.catch(err => console.error(err));//console.log(err)

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seoul',options)
 .then(response => response.json())
 .then((response) => {
     console.log(response)
     se_cloud_pct.innerHTML = response.cloud_pct
     se_temp.innerHTML = response.temp
     se_feels_like.innerHTML = response.feels_like
     se_humidity.innerHTML = response.humidity
     se_min_temp.innerHTML = response.min_temp
     se_max_temp.innerHTML = response.max_temp
     se_wind_speed.innerHTML = response.wind_speed
     se_wind_degrees.innerHTML= response.wind_degrees
     se_sunrise.innerHTML = response.sunrise
     se_sunset.innerHTML = response.sunset
})
.catch(err => console.error(err));//console.log(err)