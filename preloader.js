window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    const content = document.getElementById("content");

    const logoDuration = 3500;

    setTimeout(() => {
        preloader.style.display = "none";
        content.style.display = "flex";
    }, logoDuration);
});