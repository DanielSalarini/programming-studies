function Pessoa(nome) {
    this.nome = nome

    this.falar = () => {
        console.log(`Meu nome é ${nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

const p2 = new Pessoa('Maria')
p2.falar()