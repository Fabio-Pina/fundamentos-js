 /*
* * * Higher Order Function #01
  */

/**
 * Function that operate on other functions,
 * either by talking the as arguments or by
 * returning them, are called higher-order functions   
 */

//* Exemplo

function run(fn) {
	return fn()
}

function sayHello() {
	console.log('Hello!!')
}

run(sayHello)

run(function() { 
	console.log('run!!!')
})

const result = run(Math.random)
console.log(result)
