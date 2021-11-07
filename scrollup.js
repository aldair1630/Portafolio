window.onscroll = function() {
    if (document.documentElement.scrollTop > 100) {
        document.querySelector(".scrollup-container").classList.add("show");
    } else {
        document.querySelector(".scrollup-container").classList.remove("show");
    }
}

document.querySelector(".scrollup-container").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});