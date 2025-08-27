function alterarStatus(id) {
    
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return')
        botao.innerHTML = 'Alugar';
        let confirmar = confirm('Você tem certeza que deseja devolver o jogo?');
        if(!confirmar) {
            return;
        }
        
    } else {
        contarJogosAlugados()
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return')
        botao.innerHTML = 'Devolver';
    }
}

function contarJogosAlugados() {
    let jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented');
    let totalAlugados = jogosAlugados.length;
    console.log(`total de jogos alugados: ${totalAlugados + 1}`);
}
