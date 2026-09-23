let labelKeypress = document.getElementById('lastname')

labelKeypress.addEventListener('keyup' , pressed)

function pressed() {
    alert(this.value)
}