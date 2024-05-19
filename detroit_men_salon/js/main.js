document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("burger").addEventListener("click", function () {
        document.querySelector("header").classList.toggle("open");
    });
});
window.addEventListener('scroll', function () {
    var scroll = this.document.querySelector('.upward');
    scroll.classList.toggle("active", this.window.scrollY > 200);
});