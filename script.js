// hamburger javascript
const hamburger = document.querySelector(".hamburger");
const ham_container = document.querySelector(".container_drp");
let elem = document.querySelector(".header-box");
let x = document.querySelector(".header-img-container")
hamburger.addEventListener("click", () => {
    ham_container.style.transition = "top 5s ease";
    if (elem.style.marginTop === "150px") {
        elem.style.marginTop = "0px"
    }
    else {
        elem.style.marginTop = "150px"
    }
    hamburger.classList.toggle("active");
    ham_container.classList.toggle("active");

})

// sliderconatins text 
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
