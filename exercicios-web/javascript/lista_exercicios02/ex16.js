function chegarAnoBissexto(ano) {
    if(ano % 4 == 0) {
        if(ano % 100 != 0 || (ano % 100 == 0 && ano % 400 == 0)) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

console.log(chegarAnoBissexto(2020))
console.log(chegarAnoBissexto(2100))