let x = {
    nome: "jorge",
    passaro: "súbia",
    ano: 1146,
    comida: "oregano",

}
exibirString(x)

function exibirString(objeto){
    for (i in objeto) {
        if (typeof objeto[i] === "string") {
            console.log(i, objeto[i])
        }
    }
}

