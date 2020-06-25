class Lancamento {
    constructor(nome = 'Generico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamento(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return `Valor do mes ${this.mes} do ano ${this.ano} é ${valorConsolidado}`
    }
}

const salario = new Lancamento('Salario', 4500)
const contaDeLuz = new Lancamento('Luz', -220)
const contaDeAgua = new Lancamento('Agua', -350)
const internet = new Lancamento('Internet', -180)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamento(salario, contaDeLuz, contaDeAgua, internet)
console.log(contas.sumario())