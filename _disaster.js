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
    
    document.getElementById(id).appendChild(x);}
function putTornado(id){
    let x = document.createElement("IMG");
    x.setAttribute("src", "Tornado.jpg");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    document.getElementById(id).appendChild(x);  
}

  

function printResults(events){
    
    
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
            putTornado(id);
        else if(events[i].title.toLowerCase().includes("rain"))
            putRain(id);
        else if(events[i].title.toLowerCase().includes("dust") || events[i].title.toLowerCase().includes("sandstorm"))
            putDust(id);
        else if(events[i].title.toLowerCase().includes("eruption"))
            putEruption(id);
        else if(events[i].title.toLowerCase().includes("hurricane") || events[i].title.toLowerCase().includes("tropical storm") || events[i].title.toLowerCase().includes("typhoon") || events[i].title.toLowerCase().includes("cyclone"))
            putHurricane(id);
        else{
            
            noImage(id);
            
        }
        const para = document.createElement("p");
        para.setAttribute('class', 'disaster_text')
        para.innerHTML = '<b>' + events[i].title + '</b>' +" on "  + `${dateStart.getFullYear()}-${dateStart.getMonth() + 1}-${dateStart.getDate() + 1} `+ dateStart.toUTCString().slice(-12) + ' to ' + `${dateEnd.getFullYear()}-${dateEnd.getMonth() + 1}-${dateEnd.getDate() + 1} ` + dateEnd.toUTCString().slice(-12);
        document.getElementById(id).append(para);
        
    }
  }
fetchQuote(JSON.parse(localStorage.getItem('longlat'))).then(
    (response) => {
        console.log(response)

        if(response.count == 0)
        {
            console.log('test')
            let text = document.createElement('h1')
            text.innerHTML='NO RESULTS, you are SAFE!'
            document.getElementById('nothing').appendChild(text);
        }
        else {
            const place = JSON.parse(localStorage.getItem('location'))
            document.getElementById('disastertitle').innerHTML = `Search Results for ${place[0]}, ${place[1]}`
            console.log('test3')
            events = response.results;
            console.log(events);
            printResults(events);

        }


    }
    
)

