function aceitar(id){
    // Pegar os jogadores do localStorage
    const viagens = JSON.parse(localStorage.getItem("viagens")) || []

    // Encontrar o jogador com o id passado como parâmetro
    const viagem = viagens.find(viagem => viagem.id == id)

    viagem.statusViagem = "Aceita"

    localStorage.setItem("viagens", JSON.stringify(viagens))

    window.location.reload()
    
}

function recusar(id){
    // Pegar os jogadores do localStorage
    const viagens = JSON.parse(localStorage.getItem("viagens")) || []

    // Encontrar o jogador com o id passado como parâmetro
    const viagem = viagens.find(viagem => viagem.id == id)

    viagem.statusViagem = "Recusada"

    localStorage.setItem("viagens", JSON.stringify(viagens))

    window.location.reload()
    
}