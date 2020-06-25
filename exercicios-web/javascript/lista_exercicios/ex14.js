function feira(fruta) {
    switch(fruta) {
        case 'maçã':
            return 'Não vendemos esta fruta aqui'
        case 'kiwi':
            return 'Estamos comescassez de kiwis'
        case 'melancia':
            return 'Aqui está, são R$ 3,00 o quilo'
        default:
            return 'Erro, fruta inválida.'
    }
}

console.log(feira('maçã'))
console.log(feira('kiwi'))
console.log(feira('melancia'))
console.log(feira('laranja'))