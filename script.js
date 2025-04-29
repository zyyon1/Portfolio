const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");
const overlay = document.getElementById('overlay');

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    overlay.classList.remove('active');
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