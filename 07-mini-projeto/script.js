
let nota = [100, 70, 80]

console.log(resultado(nota))

function resultado(provas) {
   const media = calcularMedia(provas)
   if (media < 49) return "F";
   if (media < 59) return "E";
   if (media < 69) return "D";
   if (media < 79) return "C";
   if (media < 89) return "B";
   if (media <= 100) return "A";
}

function calcularMedia(notas) {
   let resultado = 0
   for (i of notas) {
      resultado += i
   }
   console.log(resultado / notas.length)
   return resultado / notas.length
   
}