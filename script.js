const preload = document.querySelector("[data-preload]");

window.addEventListener("load", function() {
    preload.classList.add("loaded");
    document.body.classList.add("loaded");
});