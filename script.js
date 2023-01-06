const options = {

    headers: {
        "Authorization": "Bearer 6UZNWzxjB0MV_4xdAmqHHqY9ygw_ZdynrqzKh39J"
    }
}
function getLocation(location)
{

}


async function fetchQuote()
{
    const response = await fetch('https://api.predicthq.com/v1/events/?category=terror', options);
    if (response.ok)  {
        console.log("SUCCESS");
        return await response.json();
    }
    else {
        console.log("FAIL");

    }
}


fetchQuote().then(
    response => {   
        console.log(response);
    }
);







    
