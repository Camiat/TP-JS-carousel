//Interacción con el DOM


//1-Generar un carrusel de imágenes: Utiliza el DOM para crear un carrusel de
//imágenes que permite al usuario avanzar o retroceder entre imágenes.

  //Carrousel


let carrousel = document.getElementById("carrousel");
//accedo a la imagen
let arrayImg = ["navidad1.jpg", "navidad2.jpg", "navidad3.jpg"]
//Posicion            0             1                2

let index = 0;

function carrouselImagen (){
    
 carrousel.src = `images/${arrayImg[index]}` ;

if(index < 2){
    index++
}else {
    index = 0
}
}

setInterval(carrouselImagen, 2000 );

//--------------------------------------------------------------------------------
//intento 1 botones sin funcionar
// let botonIzquierdo = document.getElementById("botonPrevio");
// let botonDerecho = document .getElementById("botonSgte");



// botonIzquierdo.addEventListener("click", () => {
//     carrousel.src = `images/${arrayImg[index]}` 
//     if(index < 2){
//         index--;
//     }else{
//         index=0
//     }
// });

// botonDerecho.addEventListener("click", () => {
//     carrousel.src = `images/${arrayImg[index]}` 
//     if(index < 2){
//         index++;
//     } else{
//         index = 0
//     }
// });

// botonIzquierdo.addEventListener("click", cambiarPrevio);
// botonDerecho.addEventListener("click", cambiarSgte);

//--------------------------------------------------------------------------------
//intento 2 botones sin funcionar
// let botonIzquierdo = document.getElementById("botonPrevio");
// let botonDerecho = document.getElementById("botonSgte");
// let imagenD = document.getElementById("carrousel");
// let imagenes = ["images/navidad1.jpg", "images/navidad2.jpg", "images/navidad3.jpg"];
// let currentIndex = 0;

// function cambiarPrevio() {
//   currentIndex = (currentIndex - 1 + imagenes.length) % imagenes.length
  
//   imagenD.src = imagenes[currentIndex];
// }

// function cambiarSgte() {
//   currentIndex = (currentIndex + 1) % imagenes.length;
//   imagenD.src = imagenes[currentIndex];
// }



// botonIzquierdo.addEventListener("click", cambiarPrevio);
// botonDerecho.addEventListener("click", cambiarSgte);






   


















