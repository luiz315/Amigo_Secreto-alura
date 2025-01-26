//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


// Selecionando os elementos do HTML
const inputAmigo = document.getElementById('amigo'); // Campo de texto para o nome
const listaAmigos = document.getElementById('listaAmigos'); // Lista de nomes
const resultado = document.getElementById('resultado'); // Local onde aparecerá o sorteado

// Criando uma lista vazia para guardar os nomes
const nomes = [];

// Função para adicionar amigos
function adicionarAmigo() {
    const nome = inputAmigo.value.trim(); // Pega o nome e remove espaços extras

    // Verifica se o nome está vazio
    if (nome === '') {
        alert('Por favor, digite um nome.'); // Mostra um alerta se não tiver nada
        return; // Sai da função
    }

    // Adiciona o nome à lista de nomes
    nomes.push(nome);

    // Adiciona o nome na lista visível na página
    const itemLista = document.createElement('li'); // Cria um item da lista
    itemLista.textContent = nome; // Define o texto do item como o nome digitado
    listaAmigos.appendChild(itemLista); // Coloca o item na lista no HTML

    // Limpa o campo de texto
    inputAmigo.value = '';
    inputAmigo.focus(); // Coloca o cursor no campo de texto novamente
}

// Função para sortear um amigo
function sortearAmigo() {
    // Verifica se a lista está vazia
    if (nomes.length === 0) {
        alert('A lista está vazia! Adicione nomes antes de sortear.');
        return;
    }

    // Sorteia um número aleatório entre 0 e o tamanho da lista
    const indiceAleatorio = Math.floor(Math.random() * nomes.length);

    // Pega o nome sorteado
    const nomeSorteado = nomes[indiceAleatorio];

    // Mostra o nome sorteado na tela
    resultado.textContent = `O amigo secreto sorteado é: ${nomeSorteado}`;
}