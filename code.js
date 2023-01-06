
let container = document.getElementsByClassName("container-1");
function putSnowStorm(time){
    const img = document.createElement("img");
    img.setAttribute('id',"thunderstorm" + val);
    img.src = "snow storm.jpg";
    container = document.getElementsByClassName("container-1");
    document.container.appendChild(img);
    document.write("<br /> SnowStorm On " + time);
    document.appendChild()
}

function putThunderStorm(time){
    const img = document.createElement("img");
    img.setAttribute('id',"thunderstorm" + val);
    img.src = "Thunderstorm.webp";
    container = document.getElementsByClassName("container-1");
    document.container.appendChild(img);
    document.write("<br /> Thunderstorm On " + time);
    val += 1;
}
function putFlood(time){
    const img = document.createElement("img");
    img.src = "Flood.webp";
    container = document.getElementsByClassName("container-1");
    document.container.appendChild(img);
    document.write("<br /> Flood On " + time);
}
function putHeatWave(time){
    const img = document.createElement("img");
    img.src = "Heatwave.jpg";
    container = document.getElementsByClassName("container-1");
    document.container.appendChild(img);
    document.write("<br /> Heatwave On " + time);
}
function putTornado(time){
    // let img = document.createElement("IMG");
    // img.src = "Tornado.jpg";
    // document.body.appendChild(img);
    // document.write("<br /> Tornado On " + time);
  
    let x = document.createElement("IMG");
    x.setAttribute("src", "Tornado.jpg");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    document.body.appendChild(x);
   
    const para = document.createElement("p");
    para.innerHTML = "Tornado On " + time;
    document.body.append(para);
  }

  










//Have the website redirect the user to the different disaster events happening all in one webpage
//Have a button for the user to click to redirect to more specific info of the disaster along with date of when it's happening along with ways to deal with the disaster











//On a specific day (0-90 days)

