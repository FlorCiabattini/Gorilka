// ==========================================================================================================================> Links Activos
const activeLinks = () => {

    const items = document.querySelectorAll(".nav-menu .nav-list .nav-item .nav-link");

    items.forEach((item) => {

        item.addEventListener("click", () => {

            document.querySelector(".nav-link.active").classList.remove("active");
            item.classList.add("active");

        });

    });

};

// ==============================================================================================================> Menu dispositivos moviles
const navSlide = () => {

    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-list .nav-item');

    burger.addEventListener('click', () => {

        // Ingreso del menu
        nav.classList.toggle('nav-active');
    
        // Animacion de entrada de las secciones
        navLinks.forEach ((link, index) => {

            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            };

        });

        // Animacion del menu hamburguesa
        burger.classList.toggle('toggle');
    
    });

};

// ==============================================================================================================================> Funciones
const app = () => {
    activeLinks();
    navSlide();
};

app();