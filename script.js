const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
});


const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

scrollTopBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};