const getJSON = async (url) => {
    //Get the response url
    const response = await fetch(url);

    //Check if the response is ok
    if(!response.ok) {
        throw new Error(`Response not ok ${response.status}, ${response.statusText}`);
    }
    //Parse JSON and return it
   return await response.json();
}