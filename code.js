
let container = document.getElementsByClassName("container-1");


const currentDate = new Date();
const predictedDate = new Date();
predictedDate.setDate(predictedDate.getDate() + 75);

const options = { // to use api

    headers: {
        "Authorization": "Bearer 6UZNWzxjB0MV_4xdAmqHHqY9ygw_ZdynrqzKh39J"
    }
}
function getInfo()
{
    const country = document.getElementById('country').value; //put the id of the input for location
    const city = document.getElementById('city').value; 
    
    
    //Input info into the api
    //Jave the api spit the info into the arrays


}

async function fetchLongLat() // async means it happens with
{
    // gets the data from the website api using https://api.predicthq.com/v1/events/?category=disasters,terror,severe-weather, s
    // it searches terror disasters, and severe weather everywhere all time 
    
    const response = await fetch('http://api.openweathermap.org/geo/1.0/direct?q=Moscow,RU&limit=1&appid=4466ecaa9785525d41f5b0a40540b3c0');
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
    
    const response = await fetch(
        'https://api.predicthq.com/v1/events/?limit=100&location_around.origin='    
        + place[0] + ',' + place[1] 
        + '&category=disasters,terror,severe-weather' 
        + '&start.lte='
        + `${predictedDate.getFullYear()}-${predictedDate.getMonth() + 1}-${predictedDate.getDate()}`
        + '&start.gte='
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
//For next couple days
let place = "";
let time = 0;
// An array for all the events upcoming in the area
let events = {

}
// An array for the time of when the events are going to occour
let timeOfEvents = {

}

fetchLongLat().then( // runs the api fetch and gets the info

    // after its done loading it does all the stuff in the brackets
    response => {  

        const longlat = [response[0].lat, response[0].lon];
        console.log(longlat);
        fetchQuote(longlat).then( // runs the api fetch and gets the info

            // after its done loading it does all the stuff in the brackets
            response => {   
                events = response.results
                localStorage.setItem('events', JSON.stringify(events));


            }
        );
    }


);





function putSnowStorm(){
    let x = document.createElement("IMG");
    x.setAttribute("src", "snow storm.jpg");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    document.body.appendChild(x);
}

function putThunderStorm(){
    let x = document.createElement("IMG");
    x.setAttribute("src", "Thunderstorm.webp");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    document.body.appendChild(x);
   
}
function putFlood(){
    let x = document.createElement("IMG");
    x.setAttribute("src", "Flood.webp");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    document.body.appendChild(x);
   
}
function putHeatWave(){
    let x = document.createElement("IMG");
    x.setAttribute("src", "Heatwave.jpg");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    document.body.appendChild(x);
    
}
function putEarthquake(){
    let x = document.createElement("IMG");
    x.setAttribute("src", "earthquake.webp");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    document.body.appendChild(x);
}
function putRain(){
    let x = document.createElement("IMG");
    x.setAttribute("src", "rain.jpg");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    document.body.appendChild(x);
}
function putDust(){
    let x = document.createElement("IMG");
    x.setAttribute("src", "dust.webp");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    document.body.appendChild(x);
}
function putEruption(){
    let x = document.createElement("IMG");
    x.setAttribute("src", "erruption.jpg");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    document.body.appendChild(x);
}
function putHurricane(){
    let x = document.createElement("IMG");
    x.setAttribute("src", "hurricane.jpg");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    document.body.appendChild(x);
}
function noImage(){
    let x = document.createElement("IMG");
    x.setAttribute("src", "none.jpg");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    document.body.appendChild(x);
}
function putTornado(){
    // let img = document.createElement("IMG");
    // img.src = "Tornado.jpg";
    // document.body.appendChild(img);
    // document.write("<br /> Tornado On " + time);
  
    let x = document.createElement("IMG");
    x.setAttribute("src", "Tornado.jpg");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    document.body.appendChild(x);
  }

  

  function printResults(){
    for(let i = 0; i < events.length; i++){
       if(events[i].title.toLowerCase.includes("earthquake"))
            putEarthquake()
       if(events[i].title.includes("Snowstorm") || events[i].title.includes("Winter Storm") || events[i].title.includes("Ice"))
            putSnowStorm();
       if(events[i].title.toLowerCase.includes("thunderstorm"))
            putThunderstorm();
       if(events[i].title.toLowerCase.includes("flood"))
            putFlood();
       if(events[i].title.toLowerCase.includes("heatWave"))
            putHeatWave();
       if(events[i].title.toLowerCase.includes("tornado") || events[i].title.includes("wind"))
           putTornado();
       if(events[i].title.toLowerCase.includes("rain"))
           putRain();
       if(events[i].title.toLowerCase.includes("dust") || events[i].title.toLowerCase.includes("sandstorm"))
            putDust();
       if(events[i].title.toLowerCase.includes("eruption"))
           putEruption();
       if(events[i].title.toLowerCase.includes("hurricane") || events[i].title.toLowerCase.includes("tropical storm") || events[i].title.toLowerCase.includes("typhoon") || events[i].title.toLowerCase.includes("cyclone"))
           putHurricane();
        else{
            noImage();
            const para = document.createElement("p");
            para.innerHTML = events[i].title +" on " + events[i].start;
            document.body.append(para);
        }
        const para = document.createElement("p");
        para.innerHTML = events[i].title +" on " + events[i].start;
        document.body.append(para);
    }
  }







//Have the website redirect the user to the different disaster events happening all in one webpage
//Have a button for the user to click to redirect to more specific info of the disaster along with date of when it's happening along with ways to deal with the disaster











//On a specific day (0-90 days)

