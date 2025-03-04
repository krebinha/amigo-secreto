//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
//acho que errei - let validar = document.querySelector('input').value;
// acho que essa é a corrreta 
function adicionarAmigo() { 
let input = document.getElementById("amigo");
let  nome = input.value.trim();
// adiconar um alert
if (nome === "") {
    alert("Por favor, insira um nome de amigo");
    return;
}