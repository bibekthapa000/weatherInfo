const btn= document.querySelector(".btn")

const cityInput =  document.querySelector("#city")

const temp= document.querySelector("#temp-div")


btn.addEventListener("click", async function(){
    let city= cityInput.value;
    const weatherdata= await getWeatherInfo(city)
    // console.log(weatherdata.main.temp)
    temp.innerHTML= weatherdata.main.temp+ 
})


async function getWeatherInfo(city)
{
    const apiKey= "e26259a8ede6169d3bb5572745ddd837"

   const apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

    

        const response= await fetch(apiUrl);
        const data= await response.json();
        return data;
    


}


