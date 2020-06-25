const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plastico', preco: 18.99, fragil: false }
]

const altoPreco = p => p.preco >= 500
const quebravel = p => p.fragil 
console.log(produtos.filter(altoPreco).filter(quebravel))

const nums = [9, 12, 8, 22, 5, 600]

const maior10 = n => n >= 10
let resultado = nums.filter(maior10)
console.log(resultado)