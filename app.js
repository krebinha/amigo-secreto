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

