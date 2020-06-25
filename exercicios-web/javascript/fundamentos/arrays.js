const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) //Não ocorre erro, diferente de outras linguagens

valores[4] = 10 //Atribuir valor na posição []
console.log(valores)

//.length a quantidade de elementos do array
console.log(valores.length)

//.push() acrescenta o valor () no final da array
valores.push({id: 3}, 'teste')
console.log(valores)

//.pop() retirar o ultimo valor do array e retorna
console.log(valores.pop())

// retira o valor da posição []
delete valores[0]
console.log(valores)

console.log(typeof valores)