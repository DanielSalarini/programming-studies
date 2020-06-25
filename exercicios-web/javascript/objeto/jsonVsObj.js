const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }

// JSON.stringify() transforma Objeto em JSON
console.log(JSON.stringify(obj))

// JSON.parse() transforma JSON em Objeto
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))
console.log(JSON.parse('{ "a": 1.2, "b": "string", "c": true, "d": {}, "e": [] }'))