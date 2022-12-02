document.addEventListener('DOMContentLoaded', async () =>  {
    try {
        const data = await getPlanets();
        console.log("From EventListener: ", data);
        renderMenu(data);
    }
    catch (e) {
        console.log(e);
    }
})