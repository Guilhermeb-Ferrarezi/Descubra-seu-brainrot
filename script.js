const botao = document.getElementById("botao")
const imagem = document.getElementById("imagem")
const dados = document.querySelectorAll("input")

botao.addEventListener("click", (e) => {
    e.preventDefault()


    if ([...dados].some(input => input.value.trim() === "")) {
        alert("Coloque dados válidos");
        location.reload()
        return;
    }

    let imagens = {
        tralalelo: "./img/Tralalelo Tralala.jpg",
        capuccino: "./img/Capcuino assasino.jpg",
        tungsahur: "./img/Tung tung sahur.png"
    }

    const chaves = Object.keys(imagens)
    const rand = Math.floor(Math.random() * chaves.length)
    const chaveEscolhida = chaves[rand]
    const caminho = imagens[chaveEscolhida]

    imagem.src = caminho
    dados.forEach(input => {
        input.value = ""
    });
})
