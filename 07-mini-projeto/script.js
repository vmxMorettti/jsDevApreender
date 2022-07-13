somar(27)

function somar(n1) {
   let multiplos3 = 0;
   let multiplos5 = 0;

   console.log("Multiplos de 3:")
   for (let i = 0; i <= n1; i += 3) {
    multiplos3 += i
    console.log(multiplos3)
   } 
   console.log("Multiplos de 5:")
   for (let i = 0; i <= n1; i += 5) {
    multiplos5 += i
    console.log(multiplos5)
   } 
   console.log("Soma dos multiplos de 3 com os multiplos de 5:")
   console.log(multiplos3 + multiplos5)
   
}
