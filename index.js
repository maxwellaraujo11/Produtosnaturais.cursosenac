//const name = window.prompt("Olá, qual seu nome?")
//window.alert(`Seja bem vindo ${name}`)

const form = document.getElementById('form')
const nome = document.getElementById('nome')
const email = document.getElementById('email')
const telefone = document.getElementById('telefone')

//--------------------------------------------------------------------------------------//


form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})

function checkInputs () {
    const nomeValue = nome.value.trim()
    const emailValue = email.value.trim()
    const telefoneValue = telefone.value.trim()

    if(nomeValue === "") {
        errorValidation(nome, ' *Campo obrigatorio!')
    } else {
       successValidation(nome)
    }

    if(emailValue === '') {
        errorValidation(email, '*Campo obrigatorio!')
    } else {
       successValidation(email)
    }

    if(telefoneValue === '') {
        errorValidation(telefone, '*Campo obrigatorio!')
    } else {
       successValidation(telefone)
    }
    
}

function errorValidation(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control img-error'
}

function successValidation(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control img-success' 
}


var slideIndex = 1;
var slideIndex2 = 0;
//showSlides(slideIndex);
showSlidesAutomatic();

// Controle de Próximo/Anterior
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Controles de imagem em miniatura
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Função para exibir as imagens
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function showSlidesAutomatic() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > slides.length) { slideIndex2 = 1 }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex2 - 1].style.display = "block";
  dots[slideIndex2 - 1].className += " active";
  setTimeout(showSlidesAutomatic, 2000);
}