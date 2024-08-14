console.log("JS LINKED");



let amberText = document.getElementById('amber-main');
let lightText = document.getElementById('light-main');
let darkText = document.getElementById('dark-main');
let amberBeer = document.getElementById('amber-hero-main');
let lightBeer = document.getElementById('light-hero-main');
let darkBeer = document.getElementById('dark-hero-main');
let textHero = document.querySelector('#text-hero-main p');
let signatureHero = document.getElementById('billysignature-main');
// let beersMain = document.getElementById('beers-main');

const mediaQuery768 = window.matchMedia('(min-width: 768px)');
const mediaQuery1200 = window.matchMedia('(min-width: 1200px)');



(function () {
    
    let burger = document.querySelector("#button");
    let burgerCon = document.querySelector("#burger-con");

    function hamburgerMenu() {
        burger.classList.toggle("expanded");
        burgerCon.classList.toggle("slide-toggle");
    };

    burger.addEventListener("click", hamburgerMenu, false);
})();

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    // console.log(value);

    if (mediaQuery1200.matches) {
        if (value > 420) {
            amberText.style.top = 140 - (value - 420) + 'px';
            lightText.style.left = ((value - 420) * -2) + 'px';
            darkText.style.left = ((value - 420) * 2) + 'px';
            amberBeer.style.top = 140 - (value - 420) + 'px';
            lightBeer.style.left = ((value - 420) * -1.5) + 'px';
            lightBeer.style.rotate = ((value - 420) * -0.1) + 'deg';
            darkBeer.style.left = ((value - 420) * 1.5) + 'px';
            darkBeer.style.rotate = ((value - 420) * 0.1) + 'deg';
        }

        if (value > 450) {
            amberText.style.opacity = 4 / ((value - 450) * 0.2);
            lightText.style.opacity = 4 / ((value - 450) * 0.2);
            darkText.style.opacity = 4 / ((value - 450) * 0.2);
            amberBeer.style.opacity = 4 / ((value - 450) * 0.2);
            lightBeer.style.opacity = 4 / ((value - 450) * 0.2);
            darkBeer.style.opacity = 4 / ((value - 450) * 0.2);
            } else {
            amberBeer.style.opacity = 1;
            lightBeer.style.opacity = 1;
            darkBeer.style.opacity = 1;
        }

        if (value > 650) {
            signatureHero.style.opacity = 4 / ((value - 650) * 0.8);
        } else {
            signatureHero.style.opacity = 1;
        }

        if (value > 650) {
            textHero.style.fontSize = ((value - 650) * 0.05) + 25 + 'px';
            textHero.style.top = 260 + ((value - 650) * 0.05) + 'px';
        }

        if (value > 1070) {
            textHero.style.opacity = 4 / ((value - 1070) * 0.5);
        } else {
            textHero.style.opacity = 1;
        }


    } else if (mediaQuery768.matches) {
        if (value > 180) {
            amberText.style.top = 200 - (value - 180) + 'px';
            lightText.style.left = ((value - 180) * -1.5) + 'px';
            darkText.style.left = ((value - 180) * 1.5) + 'px';
            amberBeer.style.top = 200 - (value - 180) + 'px';
            lightBeer.style.left = ((value - 180) * -1) + 'px';
            lightBeer.style.rotate = ((value - 180) * -0.08) + 'deg';
            darkBeer.style.left = ((value - 180) * 1) + 'px';
            darkBeer.style.rotate = ((value - 180) * 0.08) + 'deg';
        }

        if (value > 200) {
            amberText.style.opacity = 4 / ((value - 200) * 0.2);
            lightText.style.opacity = 4 / ((value - 200) * 0.2);
            darkText.style.opacity = 4 / ((value - 200) * 0.2);
            amberBeer.style.opacity = 4 / ((value - 200) * 0.2);
            lightBeer.style.opacity = 4 / ((value - 200) * 0.2);
            darkBeer.style.opacity = 4 / ((value - 200) * 0.2);
            textHero.style.fontSize = ((value - 200) * 0.03) + 22 + 'px';
            textHero.style.top = 110 + ((value - 200) * 0.01) + 'px';
        } else {
            amberBeer.style.opacity = 1;
            lightBeer.style.opacity = 1;
            darkBeer.style.opacity = 1;
        }

        if (value > 380) {
            signatureHero.style.opacity = 4 / ((value - 380) * 0.8);
        } else {
            signatureHero.style.opacity = 1;
        }

        if (value > 760) {
            textHero.style.opacity = 4 / ((value - 760) * 1.5);
        } else {
            textHero.style.opacity = 1;
        }


    } else {
        if (value > 90) {
            amberBeer.style.top = 200 - (value - 90) + 'px';
            lightBeer.style.left = ((value - 90) * -0.5) + 'px';
            lightBeer.style.rotate = ((value - 90) * -0.05) + 'deg';
            darkBeer.style.left = ((value - 90) * 0.5) + 'px';
            darkBeer.style.rotate = ((value - 90) * 0.05) + 'deg';
        }

        if (value > 160) {
            amberBeer.style.opacity = 4 / ((value - 160) * 0.5);
            lightBeer.style.opacity = 4 / ((value - 160) * 0.5);
            darkBeer.style.opacity = 4 / ((value - 160) * 0.5);
            textHero.style.fontSize = ((value - 160) * 0.03) + 20 + 'px';
            textHero.style.top = ((value - 160) * 0.01) + 'px';
            signatureHero.style.opacity = 4 / ((value - 160) * 1);
        } else {
            amberBeer.style.opacity = 1;
            lightBeer.style.opacity = 1;
            darkBeer.style.opacity = 1;
            signatureHero.style.opacity = 1;
        }

        if (value > 660) {
            textHero.style.opacity = 6 / (value - 660);
        } else {
            textHero.style.opacity = 1;
        }
    }
});