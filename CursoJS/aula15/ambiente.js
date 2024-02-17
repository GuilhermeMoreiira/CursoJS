/*
var num = [5, 7, 9, 3, 6]
num.sort()
num[5] = 9

num.length


console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O valor do vetor é ${num[2]}`)

var pos = num.indexOf(5)
if(pos == -1) {
    console.log('O valor não foi encontrado')
} else {
console.log(`O valor está na posição ${pos}`)
}
*/





let aula = [6, 9, 7, 8, 4, 5, 2, 1, 3]
aula.sort()
aula.push(10)

console.log(aula)
console.log(`O tamanho de seu vetor é ${aula.length}`)
var n = aula.indexOf(8)
console.log(`Seu número está no vetor ${n}`)

for(var pos in aula) {
    console.log(`A posição correta dos números são ${aula[pos]}`)
}