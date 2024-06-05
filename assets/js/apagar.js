function apagar(id){

    const viagens = JSON.parse(localStorage.getItem("viagens")) || []

    const viagensAtualizadas= viagens.filter( t => t.id !== id)

    localStorage.setItem("viagens", JSON.stringify(viagensAtualizadas))

    window.location.reload()
}