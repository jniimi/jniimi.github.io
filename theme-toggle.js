document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("theme-toggle");
    toggleButton.addEventListener("click", function() {
        document.body.classList.toggle("dark-theme");
        if (document.body.classList.contains("dark-theme")) {
            toggleButton.textContent = "!";
        } else {
            toggleButton.textContent = "?";
        }
    });
});
