window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    const content = document.getElementById("content");
    const webpUrl = `img/preloader.webp?nocache=${new Date().getTime()}`;

    preloader.innerHTML = `<img id="webpAnim" src="${webpUrl}" alt="Lab Logo Animation">`;

    const webpDuration = 3000;

    setTimeout(() => {
        preloader.style.display = "none";
        content.style.display = "flex";
    }, webpDuration);
});