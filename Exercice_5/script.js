// récupérer toutes les images
// faire une boucle sur ces images et rajouter un eventlistener


let imgHover = document.getElementsByTagName('img')

for (let i = 0; i < imgHover.length ; i++) {
    imgHover[i].addEventListener('mouseover' , () => {
        imgHover[i].src="images/image" + (i+1) + "_2.jpg"
    })
}

// for (let i = 0; i < imgHover.length ; i++) {
//     imgHover[i].addEventListener('mouseout' , () => {
//         imgHover[i].src="images/image" + (i+1) + ".jpg"
//     })
// }



// imgHover.addEventListener('mouseout' , replaceImage)

// function replaceImage() {
//     imgHover.src="images/image1.jpg"
// }
