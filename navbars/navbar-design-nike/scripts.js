function addToFavorites() {
    alert('Añadido a favoritos');
}

function goToCart() {
    alert('Ir al carrito de compras');
}

function toggleMenu() {
    var navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show');
}

document.getElementById('menuButton').addEventListener('click', function() {
    var dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.classList.toggle('show');
});

document.getElementById('searchButton').addEventListener('click', function() {
    var searchDropdown = document.getElementById('searchDropdown');
    searchDropdown.classList.toggle('show');
});

document.getElementById('searchIcon').addEventListener('click', function() {
    var searchDropdown = document.getElementById('searchDropdown');
    searchDropdown.classList.toggle('show');
});

document.getElementById('cancelButton').addEventListener('click', function() {
    var searchDropdown = document.getElementById('searchDropdown');
    searchDropdown.classList.remove('show');
});


document.getElementById('menu-icon').addEventListener('click', function() {
    document.getElementById('menu').style.right = '0';
});

document.getElementById('close-icon').addEventListener('click', function() {
    document.getElementById('menu').style.right = '-300px';
});
