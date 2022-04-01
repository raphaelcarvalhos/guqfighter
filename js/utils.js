function determineWinner({ player, enemy }) {
    document.querySelector('#result').style.display = 'flex'
    if (player.health === enemy.health) {
        document.querySelector('#result').innerHTML = 'Empate'
    } else if (player.health > enemy.health) {
        document.querySelector('#result').innerHTML = 'Jogador 1 venceu!'
        //enemy.switchSprite('death')
    } else if (player.health < enemy.health) {
        document.querySelector('#result').innerHTML = 'Jogador 2 venceu!'
        //player.switchSprite('death')
    }
}

let timer = 60
function decreaseTimer() {
    if (timer > 0 && player.health > 0 && enemy.health > 0) {
        setTimeout(decreaseTimer, 1000)
        timer--
        document.querySelector('#timer').innerHTML = timer
    }
    if (timer === 0) {
        determineWinner({ player, enemy })
    }
}