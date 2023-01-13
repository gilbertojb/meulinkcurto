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
    // se tiver dark mode, adicionar a imagem clara
    switchText.innerHTML = "LIGHT"
    logo.setAttribute('src', './assets/logo_light.svg')
  } else {
    // set tiver sem light mode, manter a imagem normal
    switchText.innerHTML = "DARK"
    logo.setAttribute('src', './assets/logo.svg')
  }
}


const form = document.querySelector("form")

form.addEventListener("submit", event => {
  event.preventDefault()

  const longUrl = document.querySelector("input[name=long_url]");

  fetch(`https://api.shrtco.de/v2/shorten?url=${longUrl.value}`)
  .then(response => {
    return response.json()
  })
  .then(data => {
    const successMessage = document.getElementById("success")
    const errorMessage = document.getElementById("error")

    const shortUrl = document.querySelector("#result #info h1")
    const originalUrl = document.querySelector("#result #info p")

    if (data.ok) {
      successMessage.classList.add('hide')

      originalUrl.innerHTML = data.result.original_link
      shortUrl.innerHTML = data.result.full_short_link
    } else {
      errorMessage.classList.add('hide')

      originalUrl.innerHTML = ""
      shortUrl.innerHTML = ""
    }
  })
  .catch(error => {
    console.error(error)
  })
})

