green = document.querySelector("#div-1");
blue = document.querySelector("#div-2");
brown = document.querySelector("#div-3");
blueviolet = document.querySelector("#div-4");
coolColors = document.addEventListener('keydown', function(event){
    if (event.key === 'a') {
        color = "red";
    } else if (event.key === 's') {
        color = "violet";
    } else if (event.key === 'd'){
        color = "yellow";
    }
})

const creativeColors = (event) => event.target.style.backgroundColor = color;

green.addEventListener("click", creativeColors); 
blue.addEventListener("click", creativeColors);
brown.addEventListener("click", creativeColors);
blueviolet.addEventListener("click", creativeColors);