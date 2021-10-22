const hambMenu = document.querySelector(".hamburger-menu");
const hamburgerLogo = document.querySelector(".fa-bars");
const closeHamburger = document.querySelector(".close");

// In questo modo apro il menu
hamburgerLogo.addEventListener('click',

    function () {
        hambMenu.style.display = "block";
    }
);

// In questo modo chiudo il menu
closeHamburger.addEventListener('click',

    function () {
        hambMenu.style.display = "none";
    }
);