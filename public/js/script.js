const inputs = document.querySelectorAll("input, textarea");

inputs.forEach(input => {

    input.addEventListener("focus", () => {
        input.parentElement.classList.add("active");
    });

    input.addEventListener("blur", () => {
        input.parentElement.classList.remove("active");
    });

});