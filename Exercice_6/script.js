let imgHover = document.getElementsByTagName('img')

for (let i = 0; i < imgHover.length ; i++) {
    imgHover[i].addEventListener('mouseover' , () => {
        imgHover[i].src="images/image" + (i+1) + "_2.jpg"
    })
}

for (let i = 0; i < imgHover.length ; i++) {
   imgHover[i].addEventListener('mouseout' , () => {
        imgHover[i].src="images/image" + (i+1) + ".jpg"
    })
}