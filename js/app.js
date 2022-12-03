let planetData = [];

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
    document.querySelector('.content-description').innerHTML = planetData.filter(item => item.name === planet).map(content => `
        <h1 class="title">${content.name}</h1>
        <p class="description">${content.overview.content}</p>
        <span class="source-link">Source : 
            <a href="${content.overview.source}">Wikipedia</a>
            <img alt="Read more on Wikipedia" src="assets/icon-source.svg">
        </span>
        <div class="category">
            <button class="category-button selected" style="--color-selected: ${content.color}">
                <span>01</span>Overview
            </button>
            <button class="category-button" style="--color-selected: ${content.color}">
                <span>02</span>Internal structure
            </button>
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
document.querySelector('.content-description').addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON' && !e.target.classList.contains('selected')) {
        e.target.classList.add('selected');
    } else {
        //TODO Begin thinking about how to solve this?
    }
})

renderMenu();