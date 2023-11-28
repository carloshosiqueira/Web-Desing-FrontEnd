let contInicial = 50
let inicial = document.getElementById('valorInicial');
const totalInvestido = document.querySelector('#totalInvestido');

function adicionarInicial() {
    contInicial += 50
    inicial.innerHTML = `${contInicial}`
    totalInvestido.innerHTML = `${contInicial + contMensal}`;
}

function removerInicial() {
    contInicial -= 50
    inicial.innerHTML = `${contInicial}`
    totalInvestido.innerHTML = `${contInicial + contMensal}`;
    if (contInicial <= 0) {
        contInicial = 0
        inicial.innerHTML = `${contInicial}`
    }
}

let contMensal = 50
let mensal = document.getElementById('valorMensal');

function adicionarMensal() {
    contMensal += 50
    mensal.innerHTML = `${contMensal}`
    totalInvestido.innerHTML = `${contInicial + contMensal}`;
}

function removerMensal() {
    contMensal -= 50
    mensal.innerHTML = `${contMensal}`
    totalInvestido.innerHTML = `${contInicial + contMensal}`;
    if (contMensal <= 0) {
        contMensal = 0
        mensal.innerHTML = `${contMensal}`
    }
}

let contMes = 1
let mes = document.getElementById('meses')

function adicionarMes() {
    contMensal ++
    mensal.innerHTML = `${contMensal}`
}

function removerMes() {
    contMes --
    mensal.innerHTML = `${contMensal}`
    if (contMes <= 0) {
        contMes = 0
        mes.innerHTML = `${contMensal}`
    }
}

const valor = document.querySelector('#valor');
const input = document.querySelector('#range')
valor.textContent = input.value;
input.addEventListener('input', (event) => {
    valor.textContent = event.target.value
});


