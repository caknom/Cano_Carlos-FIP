console.log("Beer page JS linked!");


(function () {
    
    let burger = document.querySelector("#button");
    let burgerCon = document.querySelector("#burger-con");

    function hamburgerMenu() {
        burger.classList.toggle("expanded");
        burgerCon.classList.toggle("slide-toggle");
    };

    burger.addEventListener("click", hamburgerMenu, false);
})();

var promoLightbox = document.getElementById("promoLightbox");
var promoTitle = document.getElementById("promoTitle");
var promoText = document.getElementById("promoText");


function showPromo(beerType) {

    promoLightbox.style.display = "block";

    if (beerType === 'Amber') {
        promoTitle.innerHTML = "15% OFF!";
        promoText.innerHTML = "On your first order of Amber Lager <br> using promo code: AMBER15!";
    } else if (beerType === 'Light') {
        promoTitle.innerHTML = "BUY ONE <br> GET ONE FREE!";
        promoText.innerHTML = "Light Lager <br> the perfect choise for those hot summer days!";
    } else if (beerType === 'Dark') {
        promoTitle.innerHTML = "20% OFF!";
        promoText.innerHTML = "When you buy two six-packs of Dark Lager <br> Dive into the bold flavor!";
    } 
}

window.addEventListener('click', function(event) {
    const close = document.querySelector('.close');
    if (event.target === close || event.target === promoLightbox) {
        promoLightbox.style.display = "none";
    }
});

window.onclick = function(event) {
    if (event.target === promoLightbox) {
        promoLightbox.style.display = "none";
    }
}