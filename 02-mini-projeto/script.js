
fizzBuzz("15")

function fizzBuzz(number) {
    if (number % 3 == 0 && number % 5 == 0) {
        console.log("FizzBuzz")
    } else if (number % 3 == 0){
        console.log("Fizz")
    } else if (number % 5 == 0){
        console.log("Buzz")
    } else if (number % 3 != 0 && number % 5 != 0) {
        console.log(number)
    } else {
        console.log("Não é um número")
    }
}