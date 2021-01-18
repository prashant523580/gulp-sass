window.onscroll = function() { scroll() };

function scroll() {
    var navlink = document.getElementById("navlink");
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "5px 0px";
        navlink.style.top = " 64px";
    } else {
        document.getElementById("navbar").style.padding = "20px 0px";
        navlink.style.top = " 90px";
    }
}

function changeFun(x) {
    x.classList.toggle("change");
}
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000);
}