var a = 3
let b = 4

var a = 30 //Ao redeclarar com o var não ocorre um erro (ja foi declarada mas não aponta o erro)
// let b = 40 //Ao redeclarar com o let ocorre um erro (ja foi declarada e não pode declarar denovo)

console.log(a, b)

a = 300
b = 400

console.log(a, b)

//Não é possivel mudar o valor da const
const c = 5 
console.log(c)