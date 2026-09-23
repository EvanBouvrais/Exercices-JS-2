let imgHover = document.getElementById('image1')

imgHover.addEventListener('mouseover' , addImageOnHover)

function addImageOnHover() {
    imgHover.src="images/image1_2.jpg"
}

imgHover.addEventListener('mouseout' , replaceImage)

function replaceImage() {
    imgHover.src="images/image1.jpg"
}
