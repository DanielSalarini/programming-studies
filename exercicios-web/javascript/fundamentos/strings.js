const escola = "Cod3r"

//.charAt() mostra a letra da posição ()
console.log(escola.charAt(4)) 

//.charCodeAt() mostra a letra da posição () na tabela ASCII
console.log(escola.charCodeAt(3))

//.indexOf() mostra a posição da letra ()
console.log(escola.indexOf('o'))

//.substring() cria uma string aparti da posição ()
console.log(escola.substring(1))
console.log(escola.substring(0, 3))

//.concat() juntar strings literal com uma var
console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")

//.replace(posição, string) troca a posição indicada por outro item 
console.log(escola.replace(3, 'e'))

//.split() cria um Array com a string, () <- usado para mostrar qual indicador vai separar 
console.log('Ana,Maria,Pedro'.split(','))