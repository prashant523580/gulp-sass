window.onscroll = function() { scroll() };

function scroll() {
    var navlink = document.getElementById("navlink");
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "5px 0px";
        // if (navlink.className === "nav-link") {
        //     navlink.className += " response";
        // } else {
        //     navlink.className = "navlink";
        // }
        navlink.style.top = " 64px";
    } else {
        document.getElementById("navbar").style.padding = "20px 0px";
        navlink.style.top = " 90px";
    }
}

function changeFun(x) {
    x.classList.toggle("change");
}