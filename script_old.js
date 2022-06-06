changePage(window.location.hash);

// routing
window.addEventListener('hashchange', ()=> changePage(window.location.hash))

function changePage(hash) {
    // const container = document.getElementById('page-container')
    switch (hash) {
        case '#/about':
            // container.innerHTML = '<h1>About</h1>'
            displayPage('about');
            break;
        case '#/gallery':
            // container.innerHTML = '<h1>Gallery</h1>'
            displayPage('gallery');
            break;
        case '#/contacts':
            // container.innerHTML = '<h1>Contatti</h1>'ù
            displayPage('contacts');
            break;
        default:
            // container.innerHTML = '<h1>Home</h1>'
            displayPage('home');
            break;
    }
}

function displayPage(pageId) {
    const container = document.getElementById('page-container');

    const arrayOfChildren = [...container.children];
    
    for (const child of arrayOfChildren) {
        child.style.display = 'none';
    }
    const selectedPage = document.getElementById(pageId);

    selectedPage.style.display = 'block';
}

