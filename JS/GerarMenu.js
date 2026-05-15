const header = document.querySelector('header')

function gerarMenu() {

    header.innerHTML =
        `
     <nav>
            <ul>
                <li><a href="index.html">Início</a></li>
                <li><a href="HTML/Saiba-Mais.html">Saiba mais</a></li>
                <li><a href="HTML/">Sobre</a></li>
            </ul>
        </nav>
    `
}
gerarMenu()