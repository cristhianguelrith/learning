
function carregar() {

        // Obtendo caminhos do HTML
    var timeof = window.document.getElementById('time_of_day')
    var photo = window.document.getElementById('photo')
    var modeof = window.document.getElementById('mode_of_day')
    var data = new Date()
    var hora = data.getHours()
    var diasem = data.getDay()
    
        // Legibilizando o dia da semana
    switch(diasem) {
        case 0:
            datareal = 'Domingo'
            break
        case 1:
            datareal = 'Segunda-Feira'
            break
        case 2:
            datareal = 'Terça-Feira'
            break
        case 3:
            datareal = 'Quarta-Feira'
            break
        case 4:
            datareal = 'Quinta-Feira'
            break
        case 5:
            datareal = 'Sexta-Feira'
            break
        case 6:
            datareal = 'Sábado'
            break
        default:
            datareal = 'Não sei...'
    }
        // Horário
    timeof.innerHTML = `${hora}hrs`
        // Excecução
    if (hora >= 5 && hora < 12) {
        photo.src = '/archives/morning.jpg'
        modeof.innerHTML = `${datareal}, Manhã!`
        document.body.style.background = '#f7bb39'
        document.getElementById("time_of_day").style.color = '#f7bb39'
        document.getElementById("mode_of_day").style.color = '#f7bb39'

    } else if (hora >= 12 && hora < 18) {
        photo.src = '/archives/afternoon.jpg'
        modeof.innerHTML = `${datareal}, Tarde!`
        document.body.style.background = '#eb8f46'
        document.getElementById("time_of_day").style.color = '#eb8f46'
        document.getElementById("mode_of_day").style.color = '#eb8f46'

    } else {
        photo.src = '/archives/night.jpg'
        modeof.innerHTML = `${datareal}, Noite!`
        document.body.style.background = '#0c1d48'
        document.getElementById("time_of_day").style.color = '#0c1d48'
        document.getElementById("mode_of_day").style.color = '#0c1d48'
    }
}