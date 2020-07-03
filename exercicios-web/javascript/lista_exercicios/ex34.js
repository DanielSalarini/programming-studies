const { Console } = require("console")

function sameLetter(str1, str2) {
    const letter1 = str1.toLowerCase().split('').sort().join('')
    const letter2 = str2.toLowerCase().split('').sort().join('')

    const resultado = letter1 == letter2 ? true : false
    console.log(resultado)

    return resultado
}

sameLetter('abc', 'cab')
sameLetter('DanIel', 'LEINAD')