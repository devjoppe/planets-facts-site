// API and JSON data

const API_KEY = "";
const BASE_URL = "json/";
const SOURCE = "data.json";

const fetchPlanets = async () => {

    const response = await fetch(`${BASE_URL}${SOURCE}`);

    if(!response.ok) {
        throw new Error (`${response.status}, ${response.statusText}`);
    }

    return await response.json();
}