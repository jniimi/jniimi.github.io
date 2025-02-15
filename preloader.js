window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    const content = document.getElementById("content");

    const logoDuration = 3000;

    setTimeout(() => {
        preloader.style.display = "none";
        content.style.display = "flex";
    }, logoDuration);
});