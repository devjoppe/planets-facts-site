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

// Click the main menu
document.querySelector('nav').addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.tagName === 'A') {
        renderMain(e.target.getAttribute('href'));
    }
})

// Renders the main content
const renderMain = planet => {
    document.querySelector('.textcontent').innerHTML = planetData.filter(item => item.name === planet).map(content => `
        <p>${content.overview.content}</p>
    `).join('');
}

renderMenu();