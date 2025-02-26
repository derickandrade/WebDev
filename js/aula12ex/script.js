var agora = new Date()
        var hora = agora.getHours()
        var texto = document.getElementById('textoHora')
        var mensagem = document.getElementById('mensagem')
        var corpo = document.querySelector('body')
        texto.innerHTML = `Agora são ${hora} horas`
        if (hora < 6){
            mensagem.innerHTML = `Boa madrugada!`
            corpo.
        }
        else if (hora < 12) {
            mensagem.innerHTML = `Bom dia!`
        }
        else if (hora < 18) {
            mensagem.innerHTML = `Boa tarde!`
        }
        else if (hora < 23) {
            mensagem.innerHTML = `Boa noite!`
        }
        else {
            mensagem.innerHTML = `[ERRO]`
        }