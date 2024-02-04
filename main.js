const form = document.getElementById('form-agenda');
const contatos = [];
const telefone = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha(){
    const inputNomeUsuario = document.getElementById('nome-usuario');
    const inputNumeroUsuario = document.getElementById('numero-usuario');

    if(contatos.includes(inputNomeUsuario.value)){
        alert(`O nome de usuario: ${inputNomeUsuario.value} ja foi inserido!`);
    } else {
        contatos.push(inputNomeUsuario.value);
        telefone.push(inputNumeroUsuario.value);

        let linha = '<tr>';
        linha += `<td> ${inputNomeUsuario.value}</td>`;
        linha += `<td> ${inputNumeroUsuario.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }    

    inputNomeUsuario.value = '';
    inputNumeroUsuario.value = ''; 
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
















