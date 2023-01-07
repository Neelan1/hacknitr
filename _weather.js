async function fetchWeather(place) // async means it happens with 
{
    // gets the data from the website api using https://api.predicthq.com/v1/events/?category=disasters,terror,severe-weather, s
    // it searches terror disasters, and severe weather everywhere all time 



    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=76fd3f0ca85045e899633353230601&q=${place[0]},${place[1]}&days=6&aqi=no&alerts=no`);
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
    let id = 0;
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
        id = (j % 7) + 1
        let visualWeekDay = document.createElement("li");
        visualWeekDay.setAttribute('class', 'weekDay');
        visualWeekDay.innerHTML = (weekDayList[j]);
        document.getElementById("calendar" + id).appendChild(visualWeekDay)
    
        let visualDay= document.createElement("li");
        visualDay.setAttribute('class', 'day');
        visualDay.innerHTML = (dayList[j]);
        document.getElementById("calendar" + id).appendChild(visualDay);
        
    }
}
let counter1 = 0, counter2 = 0, counter3 = 0, counter4 = 0, counter5 = 0, counter6 = 0, counter7 = 0, counter8 = 0;
function displayText(id)
{
   
   
    const weatherArray1 = ['Temperature (C): ', 'Wind (kph): ', 'Conditions: '];

    if(id.includes('2') && counter2 == 0)
    {
        counter2++;

        const weatherArray2 = [weatherList[1].avgtemp_c, weatherList[1].maxwind_kph, weatherList[1].condition.text]
        for(let i = 0; i <weatherArray2.length; i++ ){
            let text = document.createElement("li");
            console.log(text)
            text.innerHTML = weatherArray1[i] + weatherArray2[i];
            document.getElementById(id).appendChild(text);

        }

    }
    if(id.includes('1') && counter1 == 0)
    {
        counter1++;

        
        const weatherArray2 = [weatherList[0].temp_c, weatherList[0].wind_kph, weatherList[0].condition.text]
        for(let i = 0; i <weatherArray2.length; i++ ){
            let text = document.createElement("li");
            text.innerHTML = weatherArray1[i] + weatherArray2[i];
            document.getElementById(id).appendChild(text);

        }

    }
    if(id.includes('3') && counter3 == 0)
    {

        counter3++;
        const weatherArray2 = [weatherList[2].avgtemp_c, weatherList[2].maxwind_kph, weatherList[2].condition.text]
        for(let i = 0; i <weatherArray2.length; i++ ){
            let text = document.createElement("li");
            text.innerHTML = weatherArray1[i] + weatherArray2[i];
            document.getElementById(id).appendChild(text);

        }

    }
    if(id.includes('4') && counter4 == 0)
    {
        counter4++;

        
        const weatherArray2 = [weatherList[3].avgtemp_c, weatherList[3].maxwind_kph, weatherList[3].condition.text]
        for(let i = 0; i <weatherArray2.length; i++ ){
            let text = document.createElement("li");
            text.innerHTML = weatherArray1[i] + weatherArray2[i];
            document.getElementById(id).appendChild(text);

        }

    }
    if(id.includes('5') && counter5 == 0)
    {
        counter5++;

        
        const weatherArray2 = [weatherList[4].avgtemp_c, weatherList[4].maxwind_kph, weatherList[4].condition.text]
        for(let i = 0; i <weatherArray2.length; i++ ){
            let text = document.createElement("li");
            text.innerHTML = weatherArray1[i] + weatherArray2[i];
            document.getElementById(id).appendChild(text);

        }

    }
    if(id.includes('6') && counter6 == 0) 
    {
        counter6++;

        const weatherArray2 = [weatherList[5].avgtemp_c, weatherList[5].maxwind_kph, weatherList[5].condition.text]
        for(let i = 0; i <weatherArray2.length; i++ ){
            let text = document.createElement("li");
            text.innerHTML = weatherArray1[i] + weatherArray2[i];
            document.getElementById(id).appendChild(text);

        }

    }
    if(id.includes('7') && counter7 == 0)
    {

        counter7++;
        const weatherArray2 = [weatherList[6].avgtemp_c, weatherList[6].maxwind_kph, weatherList[6].condition.text]
        for(let i = 0; i <weatherArray2.length; i++ ){
            let text = document.createElement("li");
            text.innerHTML = weatherArray1[i] + weatherArray2[i];
            document.getElementById(id).appendChild(text);

        }

    }
    if(id.includes('8') && counter8 == 0)
    {

        counter8++;
        const weatherArray2 = [weatherList[7].avgtemp_c, weatherList[7].maxwind_kph, weatherList[7].condition.text]
        for(let i = 0; i <weatherArray2.length; i++ ){
            let text = document.createElement("li");
            text.innerHTML = weatherArray1[i] + weatherArray2[i];
            document.getElementById(id).appendChild(text);

        }

    }

}





let weatherList;
fetchWeather(JSON.parse(localStorage.getItem('longlat'))).then( // runs the api fetch and gets the info

        // after its done loading it does all the stuff in the brackets
        (response) => {
            let events =[response.current]
            
            let events2 = [];
            for(let i = 0; i <response.forecast.forecastday.length; i++ ){
                events2.push(response.forecast.forecastday[i].day)

            }
            Array.prototype.push.apply(events, events2)
           
            getCalender();
            
            weatherList = events;


        }
    );

