let currentImage = 0;

// Elementene vi trenger fra HTML

let allImages = document.querySelectorAll (".carusell img");

console.log(allImages);

 





function showImage (imageIndex) {
}

function moveImage (offset) {


    // Hvilket bilde er vi på nå 



    // Regn ut hvilket bilde som blir neste

let newImageIndex = currentImage + offset

allImages.forEach {(image, index) =>

if (index === newImageIndex)  {

    image.className = "current-image"
}

else {
image.className ="";

}

}

    // Fjern curret-image klassen fra nåværende bilde

    // Legg til current-image på det nye bildet

};
console. log(allImages); 

moveImage(1);

console. log (allImages);
