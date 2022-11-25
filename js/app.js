// Fetch the data from json file.
fetch('/json/data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log("Something went wrong", err);
    })