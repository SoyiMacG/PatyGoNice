var inputs = document.getElementsByClassName('formulario__input');
for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function(){
        if(this.value.length>=1) {
            this.nextElementSibling.classList.add('static')
        } else {
            this.nextElementSibling.classList.remove('static')
        }
    })
}

var inputs = document.getElementsByClassName('form__input');
for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function(){
        if(this.value.length>=1) {
            this.nextElementSibling.classList.add('static-b')
        } else {
            this.nextElementSibling.classList.remove('static-b')
        }
    })
}