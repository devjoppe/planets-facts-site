const renderMenu = data => {
    const menuItems = data.map(item => `
        <a class="nav--item" href="${item.name}">${item.name}</a>
    `);
    document.querySelector('nav').innerHTML = menuItems.join('');
}