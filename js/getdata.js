const getPlanets = async ()  => {
    try {
        const data = await fetchPlanets();
        console.log("From EventListener: ", data);
        //renderMenu(data);
        return data;
    }
    catch (e) {
        console.log(e);
    }
}