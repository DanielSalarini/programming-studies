const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
console.log(pilotos)

// remove o ultimo elemento
pilotos.pop()
console.log(pilotos)

// add no ultimo elemento
pilotos.push('Verstappen')
console.log(pilotos)

// remove o primeiro elemento
pilotos.shift()
console.log(pilotos)

// add o primeiro elemento
pilotos.unshift('Hamilton')
console.log(pilotos)

// .splice() pode adicionar e remover elementos
// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)

// .slice() retorna um array
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)