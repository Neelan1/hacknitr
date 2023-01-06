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
  // location = document.getElementById('').value;//put the id of the input for location
  // time = document.getElementById('').value; //put the id of the input for time
  //Input info into the api
  //Jave the api spit the info into the arrays
  location = "Canada"
  time = "20"
}
function getLocation(location) // gets location codes
{


  
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
        + '&category=disasters,terror,severe-weather&end.lte=' 
        + `${predictedDate.getFullYear()}-${predictedDate.getMonth() + 1}-${predictedDate.getDate()}`
        + '&end.gte='
        + `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`
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
                console.log(events);

            }
        );
    }


);





function putSnowStorm(time){
    const img = document.createElement("img");
    img.src = "snow storm.jpg";
    document.body.appendChild(img);
    document.write("<br /> SnowStorm On " + time);
}

function putThunderStorm(){
    const img = document.createElement("img");
    img.src = "Thunderstorm.webp";
    document.body.appendChild(img);
    document.write("<br /> Thunderstorm On " + time);
}
function putFlood(){
    const img = document.createElement("img");
    img.src = "Flood.webp";
    document.body.appendChild(img);
    document.write("<br /> Flood On " + time);
}
function putHeatWave(){
    const img = document.createElement("img");
    img.src = "Heatwave.jpg";
    document.body.appendChild(img);
    document.write("<br /> Heatwave On " + time);
}
function putTornado(){
    const img = document.createElement("img");
    img.src = "Tornado.jpg";
    document.body.appendChild(img);
    document.write("<br /> Tornado On " + time);
}







//Have the website redirect the user to the different disaster events happening all in one webpage
//Have a button for the user to click to redirect to more specific info of the disaster along with date of when it's happening along with ways to deal with the disaster











//On a specific day (0-90 days)

