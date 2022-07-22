green = document.querySelector("#green");
blue = document.querySelector("#blue");
brown = document.querySelector("#brown");
violet = document.querySelector("#violet");
all = document.querySelector(".container");
all.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        goodGuysColors.style.backgroundColor = "blue";
    } else if (event.key === 's') {
        /* Cambiar a color 2 */
    } else (event.key === 'd') {
        /* Cambiar a color 3 */
    }
})