function entregarCedula(valor) {
    const objCed = {
        ced1: 0,
        ced5: 0,
        ced10: 0,
        ced50: 0,
        ced100: 0,
        
        entregar() {
            let resultado = ''

            if(this.ced100 > 0) resultado += `${this.ced100} nota(s) de R$ 100. `
            if(this.ced50 > 0) resultado += `${this.ced50} nota(s) de R$ 50. `
            if(this.ced10 > 0) resultado += `${this.ced10} nota(s) de R$ 10. `
            if(this.ced5 > 0) resultado += `${this.ced5} nota(s) de R$ 5. `
            if(this.ced1 > 0) resultado += `${this.ced1} nota(s) de R$ 1. `

            console.log(`R$ ${valor}: ${resultado}`)
        }
    }

    function qualCed(valor) {
        if(valor >= 100) {
            objCed.ced100++
            return valor = valor - 100
        } else if(valor >= 50) {
            objCed.ced50++
            return valor = valor - 50
        } else if(valor >= 10) {
            objCed.ced10++
            return valor = valor - 10
        } else if(valor >= 5) {
            objCed.ced5++
            return valor = valor - 5
        } else if(valor >= 1) {
            objCed.ced1++
            return valor = valor - 1
        }  
    }
    
    function quantidadeCed(valor) {
        let resto = qualCed(valor)

        while (resto > 0) {
            resto = qualCed(resto)
        }
        
    }

    quantidadeCed(valor)
    
    objCed.entregar()
}

entregarCedula(18)
console.log('//')
entregarCedula(120)
console.log('//')
entregarCedula(350)
console.log('//')
entregarCedula(153)