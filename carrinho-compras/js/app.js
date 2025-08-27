// apenas pratica
function ordenarNumeros(a, b, c) {
    const numerosOrdenados = [a, b, c].sort((x, y) => x - y);
    return console.log(`Números ordenados: ${numerosOrdenados.join(',')}`)
}
let resultado = ordenarNumeros(9, 5, 1);
console.log(`Resultado: ${resultado}`);


// agora sim
// let totalGeral = 0;
// document.getElementById('lista-produtos').innerHTML = '';
// document.getElementById('valor-total').textContent = 'R$ 0,00';

document.addEventListener('DOMContentLoaded', function() {
  // Get the form element by class name and hide it initially
  let formulario = document.querySelector('.formulario');
  formulario.style.display = 'none';
  
  // Reset the total
  let totalGeral = 0;
  document.getElementById('lista-produtos').innerHTML = '';
  document.getElementById('valor-total').textContent = 'R$ 0,00';
});

function capturarValores() {
  // Recupera o valor do nome
  let nome = document.getElementById('campoNome').value;
  
  // Verifica se o nome foi inserido
  if (nome.trim() === "") {
    alert("Por favor, insira seu nome.");
    return;
  }
   // Exibe a mensagem de boas-vindas
   let mostrarNomeDiv = document.getElementById('mostrarNome');
   mostrarNomeDiv.innerHTML = `<h2>Bem-vindo, ${nome}!</h2>`;
   
   // Exibe o formulário de adicionar produto
   let formulario = document.querySelector('.formulario');
   formulario.style.display = 'block';

   let formulario2 = document.getElementById('meuForm');
   formulario2.style.display = 'none';
}

let totalGeral = 0;

function adicionar() {
  // recuperar  o nome do produto o valor e a quantidade 
  let produto = document.getElementById('produto').value;
  let nomeProduto = produto.split('-')[0];
  let valorUnitario = parseFloat(produto.split('R$')[1].replace(',', '.'));
  let quantidade = document.getElementById('quantidade').value;


  // validar se o produto e a quantidade são válidos
 
  if (!produto || produto.trim() === "" || !quantidade || quantidade <= 0) {
    let mensagemErro = document.getElementById('lista-produtos');
    mensagemErro.textContent = 'Produto inválido!';
    mensagemErro.style.color = 'red';
    return;
  }

  // calcular o preço o preço do produto * quantidade
  let preco = valorUnitario * quantidade;



  // adicionar esse produto no carrinho 
  let carrinho = document.getElementById('lista-produtos');
  carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">${preco}</span>
          </section>`

  // atualizar o valor total
  totalGeral += preco;
  let valorTotal = document.getElementById('valor-total');
  valorTotal.textContent = `R$ ${totalGeral}`
  document.getElementById('quantidade').value = 0;
}

function limpar() {
  let totalGeral = 0;
  document.getElementById('lista-produtos').innerHTML = '';
  document.getElementById('valor-total').textContent = 'R$ 0,00';
    
}






// Faça a soma de duas variáveis numéricas e apresente no console com uma mensagem amigável em Template String.

// Receba, no mínimo, duas sentenças como uma string e utilize split() para quebrá-la em frases menores com base em um ponto e vírgula como delimitador.

// Receba uma string contendo números separados por vírgulas. Utilize split() para separar os números e exibi-los no console.