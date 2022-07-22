// FUNCIÓN NORMAL EJERCICIO 3 DESAFÍO 3 =P!!

// function pintar(){
//     ele = document.getElementById("ele1");
//     ele.style.backgroundColor = "yellow";
// }

ele = document.getElementById("ele1");
// ele.addEventListener("click", pintar);

// FUNCIÓN ANÓNIMA DEL CÓDIGO ANTERIOOR JAJAJJAA =DDD! =P!! =)!!

ele.addEventListener("click", function(color = "green"){
    ele.style.backgroundColor = color;
});