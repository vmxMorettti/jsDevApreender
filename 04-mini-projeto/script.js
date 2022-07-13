imparOUpar("a")

function imparOUpar(numero) {
    if (typeof numero != Number) {
        console.log("Insira um número valido")
    }
    for (let i = 0; i <= numero; i++) {
        if (i % 2 == 0) {
            console.log(i + " PAR")
        } else {
            console.log(i + " IMPAR")
        }
    }
}
