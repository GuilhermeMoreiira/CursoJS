function verificar() {
   var data = new Date()
   var ano = data.getFullYear() // FULL YEAR pega os 4 digitos. ex 2023
   var fano = document.getElementById('txtano')
   var res = document.getElementById('res')
   if (fano.value.length == 0 || fano.value > ano) {
    window.alert('[ERRO] verifique os dados e tente novamente!')
   } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
        gênero = 'Homem'
        if (idade >= 0 && idade <10) {
            //CRIANÇA
            img.setAttribute('src', 'foto-criança-m.png.png')
        } else if (idade < 20) {
            //JOVEM
           img.setAttribute('src', 'foto-jovem-m.png.png')
        } else if (idade < 50) {
            //ADULTO
            img.setAttribute('src', 'foto-adulto-m.png.png')
        } else {
            //IDOSO
            img.setAttribute('src', 'foto-idoso-m.png.png')
        }
    } else if (fsex[1].checked) {
        gênero = 'Mulher'
        if (idade >= 0 && idade <10) {
            //CRIANÇA
            img.setAttribute('src', 'foto-criança-f.png.png')
        } else if (idade < 20) {
            //JOVEM
            img.setAttribute('src', 'foto-jovem-f.png.png')
        } else if (idade < 50) {
            //ADULTO
            img.setAttribute('src', 'foto-adulto-f.png.png')
        } else {
            //IDOSO
            img.setAttribute('src', 'foto-idoso-f.png.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Você é um(a) ${gênero} com ${idade} anos.`
    res.appendChild(img)
   }
}