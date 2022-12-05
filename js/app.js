let planetData = [];
let setPlanet = ``;

// Renders the menu
const renderMenu = async () => {
    const data = await getPlanets();
    planetData = data;
    const menuItems = data.map(item => `
        <a class="nav--item color-${item.name}" href="${item.name}" style="--planet-color: ${item.color}">${item.name}</a>
    `);
    document.querySelector('nav').innerHTML = menuItems.join('');

    renderMain(data[0].name);
}

// Renders the main content
const renderMain = planet => {
    setPlanet = planet;
    document.querySelector('.content-description').innerHTML = planetData.filter(item => item.name === setPlanet).map(content => `
        <h1 class="title">${content.name}</h1>
        <div class="description-wrapper">
            <!-- Description text -->
        </div>
        <div class="category">
            <button class="category-button selected" data-category="${content.overview.type}" style="--color-selected: ${content.color}">
                <span>01</span>Overview
            </button>
            <button class="category-button" data-category="${content.structure.type}" style="--color-selected: ${content.color}">
                <span>02</span>Internal structure
            </button>
            <button class="category-button" data-category="${content.geology.type}" style="--color-selected: ${content.color}">
                <span>03</span>Surface geology
            </button>
        </div>
    `).join('');

    renderDesc('overview');
    renderData(setPlanet);
}

// Renders the content of the selected category
const renderDesc = textType => {
    document.querySelector('.description-wrapper').innerHTML = planetData.filter(item => item.name === setPlanet)
        .map(content => `
            <p class="description">${content[textType].content}</p>
            <span class="source-link">Source : 
                <a href="${content[textType].source}" target="_blank">Wikipedia</a>
                <img alt="Read more on Wikipedia" src="assets/icon-source.svg">
            </span>
        `).join('');
    renderImage(textType);
}

// Renders the planet image
const renderImage = imageType => {

    const selectedPlanet = planetData.filter(item => item.name === setPlanet);
    const imageEL = document.querySelector('.content-image');

    if(imageType === 'geology') {
        imageEL.innerHTML = selectedPlanet
            .map(content => `
                <img alt="planet image of the ${content[imageType].type}" style="--image-selected: ${content.planetsize}" src="${content.images.overview}">
                <img alt="The surface of ${content.name}" src="${content.images[imageType]}" class="surface">
            `).join('');
    } else {
        imageEL.innerHTML = selectedPlanet
            .map(content => `
                <img alt="planet image of the ${content[imageType].type}" style="--image-selected: ${content.planetsize}" src="${content.images[imageType]}">
            `).join('');
    }
}

//Render planet data
const renderData = planet => {
    document.querySelector('.planet-data').innerHTML = planetData.filter(item => item.name === planet).map(content => `
        <div class="data-item">
          <span class="data-title">Rotation time</span>
          <span class="data-content">${content.rotation}</span>
        </div>
        <div class="data-item">
          <span class="data-title">Revolution time</span>
          <span class="data-content">${content.revolution}</span>
        </div>
        <div class="data-item">
          <span class="data-title">Radius</span>
          <span class="data-content">${content.radius}</span>
        </div>
        <div class="data-item">
          <span class="data-title">Average temp.</span>
          <span class="data-content">${content.temperature}</span>
        </div>
    `).join('');
}

// Click the main menu
document.querySelector('nav').addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.tagName === 'A') {
        renderMain(e.target.getAttribute('href'));
    }
})

// Click the category button
document.querySelector('.content-description').addEventListener('click',  (e) => {

    const disabledButtons = document.querySelectorAll('button');

    disabledButtons.forEach(button => {
        button.classList.remove('selected');
    });

    if(e.target.tagName === 'BUTTON' && !e.target.classList.contains('selected')) {
        e.target.classList.add('selected');
    }
    renderDesc(e.target.dataset.category);
})

renderMenu();