function estaEntre(num, min, max, inc = false) {
    if(inc) return num >= min && num <= max 

    return num > min && num < max ? true : false
}

console.log(estaEntre(60, 50, 100))  
console.log(estaEntre(160, 16, 100))  
console.log(estaEntre(3, 3, 150))  
console.log(estaEntre(3, 3, 150, true))  