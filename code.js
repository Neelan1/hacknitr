
async function fetchWeather(place) // async means it happens with 
{
    // gets the data from the website api using https://api.predicthq.com/v1/events/?category=disasters,terror,severe-weather, s
    // it searches terror disasters, and severe weather everywhere all time 



    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=76fd3f0ca85045e899633353230601&q=${place[0]},${place[1]}&days=7&aqi=no&alerts=no`);
    if (response.ok)  { // checks if response works
        
        return await response.json(); // returns it
    }
    else {
        console.log("FAIL"); // says if it fails

    }
}
async function fetchLongLat(country, city) // async means it happens with 
{
    // gets the data from the website api using https://api.predicthq.com/v1/events/?category=disasters,terror,severe-weather, s
    // it searches terror disasters, and severe weather everywhere all time 

    console.log(country)
    console.log(city)

    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=4466ecaa9785525d41f5b0a40540b3c0`);
    if (response.ok)  { // checks if response works
        
        return await response.json(); // returns it
    }
    else {
        console.log("FAIL"); // says if it fails

    }
}



//returns an object which holds the results
async function fetchQuote(place) // async means it happens with
{
    // gets the data from the website api using https://api.predicthq.com/v1/events/?category=disasters,terror,severe-weather, s
    // it searches terror disasters, and severe weather everywhere all time 
    const currentDate = new Date();
    const predictedDate = new Date();
    predictedDate.setDate(predictedDate.getDate() + 300);
    currentDate.setDate(currentDate.getDate() + 1);

    const options = { // to use api

        headers: {
            "Authorization": "Bearer 6UZNWzxjB0MV_4xdAmqHHqY9ygw_ZdynrqzKh39J"
        }
    }

    const response = await fetch(
        'https://api.predicthq.com/v1/events/?limit=100&location_around.origin='    
        + place[0] + ',' + place[1] 
        + '&category=disasters,terror,severe-weather' 
        + '&start.lte='
        + `${predictedDate.getFullYear()}-${predictedDate.getMonth() + 1}-${predictedDate.getDate()}`
        + '&start.gte='
        + `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate() + 1}`
        + '&within=199km@'+ place[0] + ',' + place[1] 
        , options);
    if (response.ok)  { // checks if response works
        console.log("SUCCESS");
        return await response.json(); // returns it
    }
    else {
        console.log("FAIL"); // says if it fails
        

    }
}

if(!(document.location.href.includes("disaster.html"))){
    const form = document.querySelector('.form');
    form.addEventListener('submit', (e) =>
    {
        e.preventDefault();
        const country = document.getElementById('country').value; //put the id of the input for location
        const city = document.getElementById('city').value; 
        if(!(country == null || country == ""))
        {
            fetchLongLat(country, city).then( // runs the api fetch and gets the info

                // after its done loading it does all the stuff in the brackets
                response => {  
                    

                    const longlat = [response[0].lat, response[0].lon];
                    console.log(longlat)
                    localStorage.setItem('longlat', JSON.stringify(longlat));
                    
                    fetchWeather(longlat).then( // runs the api fetch and gets the info

                        // after its done loading it does all the stuff in the brackets
                        (response) => {   
                            events = response
                            console.log(events);
                            window.localStorage.setItem('events', JSON.stringify(events));
                            


                        }
                    );
                }


            )

        }
        else{
            alert("Invalid Country")

        }
  
    })
}
else 
{
    printResults();
   
}

function putSnowStorm(id){
    let x = document.createElement("IMG");
    x.addEventListener("click", function(){window.location.href = "info-snowstorm.html"}); 
    x.setAttribute("src", "img-snow storm.jpg");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    document.getElementById(id).appendChild(x);

}

function putThunderStorm(id){
    let x = document.createElement("IMG");
    x.addEventListener("click", function(){window.location.href = "info-thunderstorm.html"}); 
    x.setAttribute("src", "Thunderstorm.webp");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    document.getElementById(id).appendChild(x);   
}
function putFlood(id){
    let x = document.createElement("IMG");
    x.addEventListener("click", function(){window.location.href = "info-flood.html"}); 
    x.setAttribute("src","img-flood.jpg");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    document.getElementById(id).appendChild(x);   
}
function putHeatWave(id){
    let x = document.createElement("IMG");
    x.addEventListener("click", function(){window.location.href = "info-heatwave.html"}); 
    x.setAttribute("src", "img-Heatwave.jpg");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    document.getElementById(id).appendChild(x);    
}
function putEarthquake(id){
    let x = document.createElement("IMG");
    x.addEventListener("click", function(){window.location.href = "info-earthquake.html"}); 
    x.setAttribute("src", "img-earthquake.webp");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    document.getElementById(id).appendChild(x);
}
function putRain(id){
    let x = document.createElement("IMG");
    x.addEventListener("click", function(){window.location.href = "info-rain.html"}); 
    x.setAttribute("src", "img-rain.jpg");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    document.getElementById(id).appendChild(x);}
function putDust(id){
    let x = document.createElement("IMG");
    x.addEventListener("click", function(){window.location.href = "info-sandstorm.html"}); 
    x.setAttribute("src", "img-dust.webp");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    document.getElementById(id).appendChild(x);}
function putEruption(id){
    let x = document.createElement("IMG");
    x.addEventListener("click", function(){window.location.href = "info-eruption.html"}); 
    x.setAttribute("src", "img-eruption.jpg");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    document.getElementById(id).appendChild(x);}
function putHurricane(id){
    let x = document.createElement("IMG");
    x.addEventListener("click", function(){window.location.href = "info-hurricane.html"}); 
    x.setAttribute("src", "img-hurricane.jpg");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    document.getElementById(id).appendChild(x);}
function noImage(id){
    let x = document.createElement("IMG");
    x.addEventListener("click", function(){window.location.href = "info-none.html"}); 
    x.setAttribute("src", "img-none.png");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    console.log(document.getElementById(id))
    document.getElementById(id).appendChild(x);}
function putTornado(id){
    let x = document.createElement("IMG");
    x.setAttribute("src", "Tornado.jpg");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    document.getElementById(id).appendChild(x);  
}

  

function printResults(){
    const events = JSON.parse(window.localStorage.getItem('events'));
    console.log(events);
    for(let i = 0; i < events.length; i++){
        const dateStart = new Date(events[i].start);
        const dateEnd = new Date(events[i].end);
        const id = 'col' + (i % 3 + 1);
        if(events[i].title.toLowerCase().includes("earthquake"))
            putEarthquake(id)
        else if (events[i].title.toLowerCase().includes("snowstorm") || events[i].title.toLowerCase().includes("winter Storm") || events[i].title.toLowerCase().includes("ice") || events[i].title.toLowerCase().includes("blizzard"))
            putSnowStorm(id);
        else if(events[i].title.toLowerCase().includes("thunderstorm"))
            putThunderstorm(id);
        else if(events[i].title.toLowerCase().includes("flood"))
            putFlood(id);
        else if(events[i].title.toLowerCase().includes("heatwave"))
            putHeatWave(id);
        else if(events[i].title.toLowerCase().includes("tornado") || events[i].title.toLowerCase().includes("wind"))
            putTornado(i);
        else if(events[i].title.toLowerCase().includes("rain"))
            putRain(id);
        else if(events[i].title.toLowerCase().includes("dust") || events[i].title.toLowerCase().includes("sandstorm"))
            putDust(id);
        else if(events[i].title.toLowerCase().includes("eruption"))
            putEruption(id);
        else if(events[i].title.toLowerCase().includes("hurricane") || events[i].title.toLowerCase().includes("tropical storm") || events[i].title.toLowerCase().includes("typhoon") || events[i].title.toLowerCase().includes("cyclone"))
            putHurricane(id);
        else{
            console.log(id)
            noImage(id);
            
        }
        const para = document.createElement("p");
        para.setAttribute('class', 'disaster_text')
        para.innerHTML = '<b>' + events[i].title + '</b>' +" on "  + `${dateStart.getFullYear()}-${dateStart.getMonth() + 1}-${dateStart.getDate() + 1} `+ dateStart.toUTCString().slice(-12) + ' to ' + `${dateEnd.getFullYear()}-${dateEnd.getMonth() + 1}-${dateEnd.getDate() + 1} ` + dateEnd.toUTCString().slice(-12);
        document.getElementById(id).append(para);
        
    }
  }







//Have the website redirect the user to the different disaster events happening all in one webpage
//Have a button for the user to click to redirect to more specific info of the disaster along with date of when it's happening along with ways to deal with the disaster











//On a specific day (0-90 days)

