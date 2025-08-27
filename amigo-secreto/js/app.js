let amigos = [];


function adicionar() {
    let amigo = document.getElementById("nome-amigo");
    let listAmigos = document.getElementById("lista-amigos");
    let nomeAmigo = amigo.value.trim(); // Remove espaços em branco do início e do fim
   
    // outra possibilidade para ver se tem duas pessoas com o mesmo nome
    // if (amigos.includes(amigo.value)) {
    //     document.querySelector('.form__label').innerHTML = "Esse nome já foi adicionado!";
    //     return; // Não adiciona o amigo se o nome já estiver na lista} 

    if (nomeAmigo === '') {
        document.querySelector('.form__label').innerHTML = "Campo obrigatório!";
        
    } else {
        document.querySelector('.form__label').innerHTML = "Nome do amigo";
    }

    if (listAmigos.textContent == "") {
        listAmigos.textContent = amigo.value;
    } else {
        listAmigos.textContent += "," + amigo.value;
    }
    
    amigos.push(amigo.value)
    
    atualizarLista();
    atualizarSorteio(); 

    amigo.value = ""; // Limpa o campo de entrada após adicionar o amigo


}
function sortear() {
    if (amigos.length < 4) {
        document.querySelector('.form__label').innerHTML = "Adicione mais amigos!";
        return; // Não faz nada se houver menos de 4 amigos
    }

    if (amigos.value == amigos.value) {
        document.querySelector('.form__label').innerHTML = "nomes iguais mudeos ou coloque um sobrenome!";
        return;
    }
    embaralhar(amigos);
    let listSorteio = document.getElementById("lista-sorteio");
    for (let i = 0; i < amigos.length; i++) {
        
        if (i == amigos.length - 1) {
            listSorteio.innerHTML += amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else {
            listSorteio.innerHTML += amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }
    }
}



function excluirAmigo(index) {
    amigos.splice(index, 1); // Remove o amigo do array
    atualizarLista();
    atualizarSorteio();
}

function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}

function atualizarLista() {
    let listAmigos = document.getElementById("lista-amigos");
    listAmigos.innerHTML = ""; // Limpa a lista atual

    for (let i = 0; i < amigos.length; i++) {
        let paragrafo = document.createElement("p");
        paragrafo.textContent = amigos[i];
        
        paragrafo.addEventListener("click", function() {
            excluirAmigo(i); // Passa o índice do amigo a ser removido
        });

        listAmigos.appendChild(paragrafo); // Adiciona o parágrafo à lista de amigos
    }
}



function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]]
    }
}


function reiniciar() {
    let amigo = document.getElementById("nome-amigo");
    let listAmigos = document.getElementById("lista-amigos");
    let listSorteio = document.getElementById("lista-sorteio");
    amigo.value = "";
    listAmigos.innerHTML = "";
    listSorteio.innerHTML = "";
    amigos = [];// Limpa o array de amigos
}










// Criar uma funcionalidade no Projeto Amigo Secreto que permita ao usuário clicar em um amigo na lista e removê-lo. Atualizar a visualização da lista após a remoção.

// Adicione os números 1,2,3 em uma variável chamada minhaLista e armazene os números 4, 5 e 6 separadamente em outra variável. Use o método concat() para combinar as sequências de valores em uma nova lista chamadanovaLista. Imprima novaLista no console.

// Remova o último elemento de novaLista. Imprima novaLista após a remoção.

// Utilize o algoritmo de Fisher-Yates (também conhecido como Knuth Shuffle) para embaralhar os elementos em novaLista. Pesquise e adapte o código para realizar o embaralhamento.

// Crie uma função chamada removerDuplicatas que aceita um array como parâmetro e retorna um novo array sem elementos duplicados. Teste a função com novaLista e imprima o array resultante.

// Crie uma função que valide se um número é positivo, negativo ou zero.

// Implemente uma função que verifique se uma pessoa é maior de idade.

// Desenvolva uma função que valide se uma string é vazia ou não.

// Crie uma função que determine se um ano é bissexto

// Implemente uma função que calcule a média de dois números, interrompendo a execução se algum dos números não for válido.

// Desenvolva uma função que receba um array como parâmetro e retorne o seu tamanho.

// Crie um array e utilize a função includes para verificar se um elemento específico está presente

// Função que verifica se um elemento está presente no array
function verificarElementoNoArray(arr, elemento) {
    return arr.includes(elemento);
}

// Exemplo de uso
const meuArray = [10, 20, 30, 40, 50];
const elementoProcurado = 30;

// Utilizando a função para verificar a presença do elemento no array
const elementoEstaPresente = verificarElementoNoArray(meuArray, elementoProcurado);

// Exibindo o resultado
if (elementoEstaPresente) {
    console.log(`O elemento ${elementoProcurado} está presente no array.`);
} else {
    console.log(`O elemento ${elementoProcurado} não está presente no array.`);
}

// Implemente uma função que receba um array e um elemento, e retorne se o elemento está presente no array.



// Crie um array de strings e utilize includes para verificar se uma determinada string está presente.

// Desenvolva uma função que receba um array de objetos representando estudantes de um curso e um objeto que representa um estudante procurado. Depois retorne se o objeto está presente no array.

// Função que verifica se um objeto está presente no array
function verificarObjetoNoArray(arr, objeto) {
    return arr.some(item => JSON.stringify(item) === JSON.stringify(objeto));
}

// Array de objetos representando alunos
const alunos = [
    { id: 1, nome: 'João', idade: 20 },
    { id: 2, nome: 'Maria', idade: 22 },
    { id: 3, nome: 'Pedro', idade: 21 },
    { id: 4, nome: 'Ana', idade: 19 }
];

// Objeto que queremos verificar se está presente no array
const alunoProcurado = { id: 2, nome: 'Maria', idade: 22 };

// Utilizando a função para verificar a presença do objeto no array
const objetoEstaPresente = verificarObjetoNoArray(alunos, alunoProcurado);

// Exibindo o resultado
if (objetoEstaPresente) {
    console.log('O aluno está presente no array.');
} else {
    console.log('O aluno não está presente no array.');
}


// Crie uma função que receba um array de números e retorne a soma dos elementos pares e o produto dos elementos ímpares.

function calcularSomaProduto(array) {
    let somaPares = 0;
    let produtoImpares = 1;

    for (let numero of array) {
        if (numero % 2 === 0) {
            somaPares += numero;
        } else {
            produtoImpares *= numero;
        }
    }

    return {
        somaPares,
        produtoImpares
    };
}

const numeros = [1, 2, 3, 4, 5];
const resultado = calcularSomaProduto(numeros);
console.log("Soma dos pares:", resultado.somaPares);
console.log("Produto dos ímpares:", resultado.produtoImpares);