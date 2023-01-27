const campo = document.querySelectorAll('.campo')
const figura = document.querySelector('.figura')
const score = document.querySelectorAll('.score')
const nome = document.querySelectorAll('.nome p')
const botao = document.querySelectorAll('.botao')

let vez = true
const players = {
    player1: {
        nome: 'Player 1',
        simbol: 'X',
        score: 0
    },
    player2: {
        nome: 'Player 2',
        simbol: 'O',
        score: 0
    }
}
score.forEach(p => {
    p.innerHTML = 0
})



nome[0].innerHTML = players.player1.nome
nome[1].innerHTML = players.player2.nome

nome.forEach(nome => {
    let input = nome.nextElementSibling
    let botao = input.nextElementSibling

    console.log(nome)
    console.log(input)
    nome.onclick = () => {
        input.style.display = 'inherit'
        botao.style.display = 'inherit'
        nome.style.display = 'none'

    }
})


botao.forEach(bt => {
    let div = bt.parentNode
    let nome = div.firstElementChild
    let input = nome.nextElementSibling

    bt.onclick = () => {

        palavra = input.value

        if (palavra.length > 2) {
            nome.innerHTML = input.value
            nome.style.display = 'inherit'
            input.style.display = 'none'
            bt.style.display = 'none'
        }

    }
})



campo.forEach(campinho => {
    campinho.onclick = () => {
        if (campinho.innerHTML === '') {
            if (vez) {
                campinho.innerHTML = players.player1.simbol
                figura.innerHTML = players.player2.simbol
                vez = false
            } else {
                campinho.innerHTML = players.player2.simbol
                figura.innerHTML = players.player1.simbol
                vez = true
            }
        }
        if (checkGanhador(campo)) {
            if (campinho.innerHTML === players.player1.simbol) {
                players.player1.score++

            } else {
                players.player2.score++
            }
            score[0].innerHTML = players.player1.score
            score[1].innerHTML = players.player2.score
            alert("O ganhador foi o: ".concat(campinho.innerHTML === players.player1.simbol ? players.player1.nome : players.player2.nome))
            reset(campo)
        }

    }

})

function checkGanhador(campo = []) {

    let win = false

    for (let i = 0; i < campo.length; i = i + 3) {
        if (
            campo[i].innerHTML !== '' &&
            campo[i].innerHTML === campo[i + 1].innerHTML &&
            campo[i].innerHTML === campo[i + 2].innerHTML
        ) {
            win = true;
        }
    }
    for (let i = 0; i < 3; i = i + 1) {
        if (
            campo[i].innerHTML !== '' &&
            campo[i].innerHTML === campo[i + 3].innerHTML &&
            campo[i].innerHTML === campo[i + 6].innerHTML
        ) {
            win = true;
        }
    }

    if (
        campo[0].innerHTML !== '' &&
        campo[0].innerHTML === campo[4].innerHTML &&
        campo[0].innerHTML === campo[8].innerHTML
    ) {
        win = true;
    } else if (
        campo[2].innerHTML !== '' &&
        campo[2].innerHTML === campo[4].innerHTML &&
        campo[2].innerHTML === campo[6].innerHTML
    ) {
        win = true;
    }



    console.log(win)
    return win
}

function reset(campo = []) {
    for (var i = 0; i < campo.length; i++) {
        campo[i].innerHTML = ''
    }
}