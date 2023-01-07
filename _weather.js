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
function getWeather(days){
    let objToday = new Date()
    objToday.setDate(objToday.getDate() + days)
    return objToday;
}
let month = 0;
let year = 0;
function getCalender(){
    let id = (i % 7) + 1
    let objToday = getWeather(0);
    let weekDay = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
    let months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
    let weekDayList = [

    ]
    let dayList = [

    ]
    //Code for the first day to get the month and year along with the day and day of the week to append
    let count = 0;
    

    if(objToday.getDay() == 0){
        count++
    }

    
    //Loops through the other 6 days 
    for(let i = 0; i < 7; i++){
        if(i == 0)
        {
            month = months[objToday.getMonth()];
            year = objToday.getFullYear();
        }

        objToday = getWeather(i);
        let curDay = objToday.getDate();
        let dayOfWeek = weekDay[objToday.getDay()]

        weekDayList.push(dayOfWeek);
        dayList.push(curDay);
    }
    //Turns the year and month into html elements
    // let visualMonth = document.createElement("li");
    // visualMonth.setAttribute('class', 'month');
    // visualMonth.innerHTML = curMonth;

    // let visualYear = document.createElement("li");
    // visualYear.setAttribute('class', 'year');
    // visualYear.innerHTML = (curYear);

    for(let j = 0; j < weekDayList.length; j++){
        let visualWeekDay = document.createElement("li");
        visualWeekDay.setAttribute('class', 'weekDay');
        visualWeekDay.innerHTML = (weekDayList[j]);
        document.getElementById(id).appendChild(visualWeekDay)
    }
    for(let k = 0; k < dayList.length; k++){
        let visualDay= document.createElement("li");
        visualDay.setAttribute('class', 'day');
        visualDay.innerHTML = (dayList[k]);
        document.getElementById(id).appendChild(visualDay);
    }
}
fetchWeather(JSON.parse(localStorage.getItem('longlat'))).then( // runs the api fetch and gets the info

        // after its done loading it does all the stuff in the brackets
        (response) => {
            events =
            events = response.forecast
            console.log(events);
            getCalender();

        }
    );

