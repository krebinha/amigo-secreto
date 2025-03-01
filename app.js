//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
//let validar = document.querySelector('input').value;
function adicionarAmigo() {
    let nome = document.querySelector('input').value;
    
    if (nome == '') {
        alert('Por favor, insira um nome.');

    } else {
        amigos.push(nome);
        document.querySelector('input').value = '';
        document.querySelector('input').focus();
        mostrarLista();

        listaAmigos.push(nome);
        console.log(listaAmigos);
        atualizarLista();
        Input.value = '';
    }
    
    function atualizarLista(){
        let listar = document.getElementById('listaAmigos');
        listar.innerHTML = '';
    }

    function limparCampo() {
    document.querySelector('input').value = '';
    document.querySelector('input').focus();

}