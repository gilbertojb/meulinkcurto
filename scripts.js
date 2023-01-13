// ao clicar no ícone:

// mudar a cor de fundo da tela dark
// mudar o texto de dark -> light
// mudar o ícone de lua -> sol


// se já estiver dark:
// mudar a cor de fundo da tela para light
// mudar o texto de light -> dark
// mudar o ícone de sol -> lua

function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("dark")

  // pegar a tag img
  const switchText = document.querySelector("#switch span")
  const logo = document.querySelector("header img")

  // substituir a imagem
  if (html.classList.contains("dark")) {
    // se tiver dark mode, adicionar a imagem dark
    switchText.innerHTML = "LIGHT"
    logo.setAttribute('src', './images/logo-light.png')
  } else {
    // set tiver sem light mode, manter a imagem normal
    switchText.innerHTML = "DARK"
    logo.setAttribute('src', './images/logo.png')
  }
}

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault()

  const longUrl = document.querySelector("input[name=long_url]");

  fetch(`https://api.shrtco.de/v2/shorten?url=${longUrl.value}`)
  .then(response => {
    return response.json()
  })
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.log(error)
  })
})

