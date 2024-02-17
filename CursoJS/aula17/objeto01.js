var amigo = {nome:'Guilherme', 
sexo:'Masculino', 
peso:75.0, 
engordar(p=0){
    console.log('Ficou forte, ganhou massa')
    this.peso += p
}}
amigo.engordar(10)
console.log(`${amigo.nome} pesa ${amigo.peso}kg.`)