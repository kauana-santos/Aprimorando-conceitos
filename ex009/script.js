class Carro{
    constructor(pnome, ptipo){
        this.nome = pnome
        if( ptipo == 1){
            this.tipo = "esportivo"
            this.velmax = 300
        } else if(ptipo == 2){
            this.tipo = "Utilitario"
            this.velmax = 100
        } else if (ptipo == 3){
            this.tipo = "Passeio"
            this.velmax = 160
        } else{
            this.tipo = "Inválido"
        }
        
    }

    getNome(){
        return this.nome
    }

    getTipo(){
        return this.tipo
    }

    getVelmax(){
        return this.velmax
    }

    getInfo(){
        return [this.nome, this.tipo, this.velmax]
    }

    setNome(nome){
        this.nome = nome
    }

    setTipo(tipo){
        this.tipo = tipo
    }

    setVelmax(velmax){
        this.velmax = velmax
    }

    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`Velocidade: ${this.velmax}`)
    }
}

let c1 = new Carro(" porshe", 1)
let c2 = new Carro("Super luxo", 2)
let c3 = new Carro("Comum", 3)

c1.setNome("Ferrari")


// c1.info()
// c2.info()

console.log(c1.getInfo())
