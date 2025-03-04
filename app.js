//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
//acho que errei - let validar = document.querySelector('input').value;
// acho que essa é a corrreta 
function adicionarAmigo() {
let input = document.getElementById("amigo");    
let nome = input.value.trim();
// valida a funcao
if (nome === "") {
    alert("Por Favor, insira um nome válido");
    return; 
}

amigos.push(nome);
input.value = "";
atualizarLista();
}
// atualiza a lista de amigos
function atualizarLista() {
let lista = document.getElementById("lista");
lista.innerHTML = "";
// cria um elemento li para cada amigo
for (let i = 0; i < amigos.length; i++) {
let lista = document.createElement("li"); // pagina doc https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
li.textContent = amigos[i];
lista.appendChild(li);
}
}

//gerar sorteio vamos la
function sortearAmigo() {
let amigoAleatorio = amigos[Math.floor(Math.random() * amigos.length)];
let amigoSorteado = amigos[amigoAleatorio];
let resultado = document.getElementById("resultado");

//agora validar
if (amigos.length === 0) {
    alert("Por favor, adicione pelo menos 1 amigo antes de sortear");
    return;
}
// limpa o resultado
resultadoLista.innerHTML = `<li>O amigo sorteado é: ${amigoSorteado}</li>`;
}
