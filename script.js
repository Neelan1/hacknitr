const options = {

    headers: {
        "Authorization": "Bearer 6UZNWzxjB0MV_4xdAmqHHqY9ygw_ZdynrqzKh39J"

       

    }
}


async function fetchQuote()
{
    let num = Math.floor(Math.random() * 17666) + 1

        
        const response = await fetch('https://api.predicthq.com/v1/events/', options);
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







    
