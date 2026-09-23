let buttonPressed = document.getElementById('button')
let lastname = document.getElementById('lastname')
let firstname = document.getElementById('firstname')
let city = document.getElementById('city')


buttonPressed.addEventListener('click' , buttonPressedDown)

function buttonPressedDown() {
    lastname.value=""
    firstname.value=""
    city.value=""
}