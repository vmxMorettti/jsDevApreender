limiteVelocidade(89)

function limiteVelocidade(velocidade) {
    if (velocidade <= 74) {
        ok
    } else {
        let pontoNaCarteira = Math.floor((velocidade - 70) / 5)
        console.log("Você ultrapassou a velocidade máxima e recebeu " + pontoNaCarteira +" pontos na carteira")
        if (pontoNaCarteira > 12) {
            console.log("Sua carteira foi suspensa")
        }
    }
}
