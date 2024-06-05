document.querySelector("#botao-cadastrar").addEventListener("click", () => {
   
    const pais = document.querySelector("#pais").value
    const estado = document.querySelector("#estado").value
    const rio = document.querySelector("#rio").value
    const descricao = document.querySelector("#descricao").value
    const dataInicio = document.querySelector("#dataInicio").value
    const dataFim = document.querySelector("#dataFim").value
    const imagem = document.querySelector("#imagem").value

    const viagem = {
        id: "id" + new Date().getTime(),
        pais: pais,
        estado: estado,
        rio: rio,
        descricao: descricao,
        dataInicio: dataInicio,
        dataFim: dataFim,
        imagem: imagem,
        statusViagem: "Pendente"
    }
    salvar(viagem)
})

function salvar(viagem) {
    const viagens = JSON.parse (localStorage.getItem('viagens')) || []
    viagens.push(viagem)
    localStorage.setItem("viagens", JSON.stringify(viagens))

    window.location = "viagens.html"

}