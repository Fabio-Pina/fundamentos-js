 /*
* * * First Class-function
  */

/* A programming language is said to have Firt-class functions when functions in that language are treated like any other variable */

//* Exemplo

const add = function (a, b) {
	return a + b
}

const subtract = function (a, b) {
	return a - b
}

const multiply = (x, y) => x * y 
const divide = (x, y) => x / y

console.log(add(10, 20))
console.log(subtract(10, 20))
console.log(multiply(10, 20))
console.log(divide(10, 20))


