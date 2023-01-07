

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
                    localStorage.setItem('longlat', JSON.stringify(longlat));
                    document.location.href='calender.html'

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






//Have the website redirect the user to the different disaster events happening all in one webpage
//Have a button for the user to click to redirect to more specific info of the disaster along with date of when it's happening along with ways to deal with the disaster











//On a specific day (0-90 days)

