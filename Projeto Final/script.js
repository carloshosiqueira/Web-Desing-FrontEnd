let contInicial = 50;
let contMensal = 50;
let inicial = document.getElementById('valorInicial');
let mensal = document.getElementById('valorMensal');
const totalInvestido = document.querySelector('#totalInvestido');

function adicionarInicial() {
    contInicial += 50;
    inicial.innerHTML = `${contInicial}`;
    calcular();
}

function removerInicial() {
    contInicial -= 50;
    contInicial = Math.max(0, contInicial); // Garante que contInicial não seja negativo
    inicial.innerHTML = `${contInicial}`;
    calcular();
}

function adicionarMensal() {
    contMensal += 50;
    mensal.innerHTML = `${contMensal}`;
    calcular();
}

function removerMensal() {
    contMensal -= 50;
    contMensal = Math.max(0, contMensal); // Garante que contMensal não seja negativo
    mensal.innerHTML = `${contMensal}`;
    calcular();
}

// Mapeia os valores do slider para os meses desejados
const mesesMapa = [1, 2, 3, 6, 12, 24, 60, 360];

document.getElementById('meses').addEventListener("input", function () {
    var indiceMesesSelecionado = parseInt(this.value);
    var mesesSelecionados = mesesMapa[indiceMesesSelecionado];

    // Atualiza a exibição do número de meses selecionados
    document.getElementById('qntdMeses').innerHTML = `${mesesSelecionados} Mês${mesesSelecionados > 1 ? 'es' : ''}`;

    // Atualiza o valor no parágrafo relacionado aos meses
    document.getElementById('resultMeses').innerHTML = mesesSelecionados;

    // Chama a função calcular() para recalcular o investimento com o novo número de meses
    calcular();
});

function calcular() {
    var num1 = contInicial;
    var num2 = contMensal;
    var indiceMesesSelecionado = parseInt(document.getElementById("meses").value);
    var mesesSelecionados = mesesMapa[indiceMesesSelecionado];
    
    var juros = 0.0079;
    var totalComJuros = (num1 + num2 * mesesSelecionados) * Math.pow((1 + juros), mesesSelecionados);

    document.getElementById("resInvestimento").innerHTML = totalComJuros.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " reais";
    document.getElementById("totalInvestido").innerHTML = (num1 + num2 * mesesSelecionados).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " reais";
    totalInvestido.innerHTML = (num1 + num2 * mesesSelecionados).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " reais";
}


document.getElementById("meses").addEventListener("input", function () {
    document.getElementById("resultMeses").innerHTML = mesesMapa[parseInt(this.value)];
    calcular();
});

function atualizarTotalInvestido() {
    var meses = mesesMapa[parseInt(document.getElementById("meses").value)];
    var total = contInicial + contMensal * meses;
    totalInvestido.innerHTML = total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " reais";
}

window.addEventListener('load', calcular);