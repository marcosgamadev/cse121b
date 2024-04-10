let key = "3b7067cf7e933d736b0e75856853a827"


function screen(data){
    console.log(data)
    document.querySelector(".city").innerHTML = "Weather in " + data.name
    document.querySelector(".temp").innerHTML =  Math.floor(data.main.temp) + "°C"
    document.querySelector(".description").innerHTML = data.weather[0].description
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png"
}

async function search(city){
    let data = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
    city + 
    "&appid=" + 
    key + 
    "&lang=en" +
    "&units=metric"
    )
    .then(answer => answer.json())

    screen(data)
}


function clickTheBottom(){
   let city = document.querySelector(".input-city").value

   search(city)
}