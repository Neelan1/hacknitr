
async function fetchLongLat(country, city) // async means it happens with 
{
    // gets the data from the website api using https://api.predicthq.com/v1/events/?category=disasters,terror,severe-weather, s
    // it searches terror disasters, and severe weather everywhere all time 
    
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
    predictedDate.setDate(predictedDate.getDate() + 90);

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
        + '&start.gt='
        + `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`
        + '&within=300km@'+ place[0] + ',' + place[1] 
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
        fetchLongLat(country, city).then( // runs the api fetch and gets the info

            // after its done loading it does all the stuff in the brackets
            response => {  

                const longlat = [response[0].lat, response[0].lon];
                console.log(longlat);
                fetchQuote(longlat).then( // runs the api fetch and gets the info

                    // after its done loading it does all the stuff in the brackets
                    response => {   
                        events = response.results;
                        console.log(events);
                        window.localStorage.setItem('events', JSON.stringify(events));
                        document.location.href = "disaster.html";


                    }
                );
            }


        )
    })
}
else 
{
    printResults();
   
}

function putSnowStorm(){
    let x = document.createElement("IMG");
    x.setAttribute("src", "snow storm.jpg");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    document.getElementById("results").appendChild(x);

}

function putThunderStorm(){
    let x = document.createElement("IMG");
    x.setAttribute("src", "Thunderstorm.webp");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    document.getElementById("results").appendChild(x);   
}
function putFlood(){
    let x = document.createElement("IMG");
    x.setAttribute("src", "Flood.webp");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    document.getElementById("results").appendChild(x);   
}
function putHeatWave(){
    let x = document.createElement("IMG");
    x.setAttribute("src", "Heatwave.jpg");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    document.getElementById("results").appendChild(x);    
}
function putEarthquake(){
    let x = document.createElement("IMG");
    x.setAttribute("src", "earthquake.webp");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    const y = document.getElementById('test');
    document.body.appendChild(x);
}
function putRain(){
    let x = document.createElement("IMG");
    x.setAttribute("src", "rain.jpg");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    document.getElementById("results").appendChild(x);}
function putDust(){
    let x = document.createElement("IMG");
    x.setAttribute("src", "dust.webp");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    document.getElementById("results").appendChild(x);}
function putEruption(){
    let x = document.createElement("IMG");
    x.setAttribute("src", "erruption.jpg");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    document.getElementById("results").appendChild(x);}
function putHurricane(){
    let x = document.createElement("IMG");
    x.setAttribute("src", "hurricane.jpg");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    document.getElementById("results").appendChild(x);}
function noImage(){
    let x = document.createElement("IMG");
    x.setAttribute("src", "none.jpg");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    document.getElementById("results").appendChild(x);}
function putTornado(){
  
    let x = document.createElement("IMG");
    x.setAttribute("src", "Tornado.jpg");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    document.getElementById("results").appendChild(x);  }

  

function printResults(){
    const events = JSON.parse(window.localStorage.getItem('events'));
    console.log(events);
    for(let i = 0; i < events.length; i++){
        if(events[i].title.toLowerCase().includes("earthquake"))
            putEarthquake()
        else if (events[i].title.toLowerCase().includes("snowstorm") || events[i].title.toLowerCase().includes("winter Storm") || events[i].title.toLowerCase().includes("ice") || events[i].title.toLowerCase().includes("blizzard"))
            putSnowStorm();
        else if(events[i].title.toLowerCase().includes("thunderstorm"))
            putThunderstorm();
        else if(events[i].title.toLowerCase().includes("flood"))
            putFlood();
        else if(events[i].title.toLowerCase().includes("heatwave"))
            putHeatWave();
        else if(events[i].title.toLowerCase().includes("tornado") || events[i].title.toLowerCase().includes("wind"))
            putTornado();
        else if(events[i].title.toLowerCase().includes("rain"))
            putRain();
        else if(events[i].title.toLowerCase().includes("dust") || events[i].title.toLowerCase().includes("sandstorm"))
            putDust();
        else if(events[i].title.toLowerCase().includes("eruption"))
            putEruption();
        else if(events[i].title.toLowerCase().includes("hurricane") || events[i].title.toLowerCase().includes("tropical storm") || events[i].title.toLowerCase().includes("typhoon") || events[i].title.toLowerCase().includes("cyclone"))
            putHurricane();
        else{
            noImage();
            const para = document.createElement("p");
            para.innerHTML = events[i].title +" on " + events[i].start;
            const column = document.getElementById('col' + i % 3)
            document.column.append(para);
        }
        const para = document.createElement("p");
        para.innerHTML = events[i].title +" on " + events[i].start;
        const column = document.getElementById('col' + i % 3);
        document.column.append(para);
        localStorage.clear();
    }
  }







//Have the website redirect the user to the different disaster events happening all in one webpage
//Have a button for the user to click to redirect to more specific info of the disaster along with date of when it's happening along with ways to deal with the disaster











//On a specific day (0-90 days)

