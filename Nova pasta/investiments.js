// Mapeia os valores do slider para os meses desejados
const mesesMap = [1, 2, 3, 6, 12, 24, 60, 360];

document.getElementById('meses').addEventListener("input", function () {
    var selectedMonthsIndex = parseInt(this.value);
    var selectedMonths = mesesMap[selectedMonthsIndex];

    // Atualiza a exibição do número de meses selecionados
    document.getElementById('qntdMeses').innerHTML = `${selectedMonths} Mês${selectedMonths > 1 ? 'es' : ''}`;

    // Atualiza o valor no parágrafo relacionado aos meses
    document.getElementById('resultMeses').innerHTML = selectedMonths;

    // Chama a função calculate() para recalcular o investimento com o novo número de meses
    calculate();
});

function calculate() {
    var num1 = 100; // Substitua isso pelo seu valor inicial
    var num2 = 100; // Substitua isso pelo seu valor mensal
    var months = mesesMap[parseInt(document.getElementById("meses").value)];
    var total = (num1 + num2) * months * 1.0079;
    document.getElementById("resInvestimento").innerHTML = total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " reais";
    document.getElementById("totalInvestido").innerHTML = (num1 + num2).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " reais";
}

document.getElementById("meses").addEventListener("input", function () {
    document.getElementById("resultMeses").innerHTML = mesesMap[parseInt(this.value)];
    calculate();
});
