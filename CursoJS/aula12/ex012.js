var data = new Date()
var agora = new Date()
var hora = agora.getHours()
var dia = agora.getDate()
console.log(`Agora são exatamente ${hora} horas, do dia ${dia}.`)
if (hora <= 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa Tarde!')
} else if(hora > 18) {
    console.log('Boa Noite!')
} else if (hora > 1 && 6) {
    console.log('Boa madrugada!')
}