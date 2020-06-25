const peso1 = 1.0
const peso2 = Number('2.2')

console.log(peso1, peso2)

// .isInteger() saber se o numero é Inteiro
console.log(Number.isInteger(peso1)) 
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

// .toFixed() limita o numero decimais
console.log(media.toFixed(2)) 
// .toString() transforma para string, (2)pode transforma em binario
console.log(media.toString(2)) 
console.log(typeof media)
console.log(typeof Number)