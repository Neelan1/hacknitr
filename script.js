const options = { // to use api

    headers: {
        "Authorization": "Bearer 6UZNWzxjB0MV_4xdAmqHHqY9ygw_ZdynrqzKh39J"
    }
}
function getLocation(location) // gets location codes
{


}


async function fetchQuote() // async means it happens with
{
    // gets the data from the website api using https://api.predicthq.com/v1/events/?category=disasters,terror,severe-weather, s
    // it searches terror disasters, and severe weather everywhere all time 
    
    const response = await fetch('https://api.predicthq.com/v1/events/?category=disasters,terror,severe-weather' + place + date, options);
    if (response.ok)  { // checks if response works
        console.log("SUCCESS");
        return await response.json(); // returns it
    }
    else {
        console.log("FAIL"); // says if it fails

    }
}


fetchQuote().then( // runs the api fetch and gets the info

    // after its done loading it does all the stuff in the brackets
    response => {   
        console.log(response);
    }
);







    
