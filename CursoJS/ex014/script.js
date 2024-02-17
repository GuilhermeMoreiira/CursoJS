function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanhã.png.png'
        document.body.style.background = '#C2A477'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'fototarde.png.png'
        document.body.style.background = '#ED8755'
    } else {
        img.src = 'fotonoite.png.png'
        document.body.style.background = '#805A89'
    }
}
