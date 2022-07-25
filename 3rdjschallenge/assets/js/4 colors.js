const colorDivs = document.addEventListener('keydown', function (event) {
    green = document.querySelector("#green");
    blue = document.querySelector("#blue");
    brown = document.querySelector("#brown");
    violet = document.querySelector("#violet");

    if (event.key === 'a') {
        green.style.backgroundColor = "brown";
    } else if (event.key === 's') {
        blue.style.backgroundColor = "violet";
    } else if (event.key === 'd') {
        brown.style.backgroundColor = "green";
    } else {
        violet.style.backgroundColor = "blue";
    }

    green.addEventListener("click", function(){
        green.style.backgroundColor = "green";
    })
    blue.addEventListener("click", function(){
        blue.style.backgroundColor = "blue";
    })
    brown.addEventListener("click", function(){
        brown.style.backgroundColor = "brown";
    })
    violet.addEventListener("click", function(){
        violet.style.backgroundColor = "violet";
    })


});