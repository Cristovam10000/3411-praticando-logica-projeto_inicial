function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let quantidade = parseInt(document.getElementById('qtd').value);

    if (quantidade <= 0) {
        alert('quantidade inválida');
        return;
    }

    if (tipo.value == "pista") {
        comprarPista(quantidade);
    } else if (tipo.value == "superior") {
        comprarSuperior(quantidade);
    } else {
        comprarInferior(quantidade);
    }

    document.getElementById('qtd').value = 0;
    

}

function comprarPista(quantidade) {
    let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent);
    if (quantidade > quantidadePista) {
        alert('quantidade indisponivel no momento');
    } else {
        quantidadePista -= quantidade;
        document.getElementById('qtd-pista').textContent = quantidadePista;
        alert('compra realizada com sucesso!');
    }
}

function comprarSuperior(quantidade) {
    let quantidadeSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    
    if (quantidade > quantidadeSuperior) {
        alert('Quantidade indisponível no momento');
    } else {
        quantidadeSuperior -= quantidade;
        document.getElementById('qtd-superior').textContent = quantidadeSuperior;
        alert('Compra realizada com sucesso!');
    }
}
function comprarInferior(quantidade) {
    let quantidadeInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if( quantidade > quantidadeInferior) {
        alert('quantidade indisponivel no momento');
    }
    else {
        quantidadeInferior -= quantidade;
        document.getElementById('qtd-inferior').textContent = quantidadeInferior;
        alert('compra realizada com sucesso!');
    }

}    


// Desafios

function converteParaInteiro(valorString) {
    return parseInt(valorString)
}

let valorString = "123";
let valorInteiro = converteParaInteiro(valorString);
console.log(valorInteiro); // 123.45


function adicao(a, b) {
    return a+ b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    return a /b;
}

function calculadora(operacao, a, b) {
    switch (operacao) {
        case 'adicao':
            return adicao(a, b);
        
        case 'subtracao':
            return subtracao(a, b);
        
        case 'multiplicacao':
            return multiplicacao(a, b);
        
        case 'divisao':
            return divisao(a, b);

        default:
            return 'Operação inválida';    
        
            
    }

}
resultado = calculadora('multiplicacao', 10340, 63425);
console.log(resultado);





















// function calcularDescontoTotal(quantidadeDeJogos) {
//     let desconto = 0;
//     let i = 0;
//     let taxaDesconto = 0;
    
//     // Determina a taxa de desconto correta
//     if (quantidadeDeJogos >= 10) {
//         taxaDesconto = 0.2; // 20% de desconto para 10 ou mais jogos
//     } else if (quantidadeDeJogos >= 5) {
//         taxaDesconto = 0.1; // 10% de desconto para 5 a 9 jogos
//     }
    
//     // Calcula o desconto total para todos os jogos
//     while (i < quantidadeDeJogos) {
//         desconto += taxaDesconto * 50;
//         i++;
//     }
    
//     return desconto;
// }

// // Exemplos de uso:
// // calcularDescontoTotal(3)  // Resultado: R$0 (nenhum desconto)
// // calcularDescontoTotal(5)  // Resultado: R$25 (5 jogos com 10% de desconto cada)
// // calcularDescontoTotal(10) // Resultado: R$100 (10 jogos com 20% de desconto cada)