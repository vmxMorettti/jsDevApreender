
nmrPrimo(15)

function nmrPrimo(n1) {
   for (i = 2; i <= n1; i++){
      let primo = true;
      for (x = 2; x < i; x++) {
         if (i % x == 0){
            primo = false;
            break;
         }
      }
      if (primo) console.log(i)
   }

}
   