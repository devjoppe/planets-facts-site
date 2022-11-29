const menuBt = document.querySelector('.nav--item');

let planetsData; // Holds all the data

// Prints out the menu
const menuItems = planets => {
    console.log("Inside menuItems: ", planets);
    //TODO: Print menu
    console.log("Variable outside try scope: ", planetsData);
}

//TODO: Click - get the name (id) from menu item
//TODO: Create a function that

//Important to catch errors. The app is still running. Uncatched errors will break the app.
const loadPage = async () => { // When running async and await, it will return the data when it has completed load.
    try { // Check if there is an error (try/catch)
        const getPlanets = await getJSON('./json/data.json');
        console.log(getPlanets); //If not await (promise), when async and await (data).
        planetsData = getPlanets;
        menuItems(getPlanets);

    } catch (e) { // e = type of error event/exception. Checks against "throw new Error".
        console.log("Caught the error: ", e);
    } finally {
        // Always runs if it is ok or error
        console.log("Finally is running");
    }
}

loadPage();

// Check what Link the user are clicking
//TODO: Create a function that displays the data.
menuBt.addEventListener('click', () => {
    console.log("Data inside button load: ", planetsData);
})
