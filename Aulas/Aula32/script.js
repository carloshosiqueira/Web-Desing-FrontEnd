let resp = window.document.getElementById('saida')

function acao1(){
    resp.innerHTML = '<p>Clicou no primeiro botao</p>'
}
function acao2(){
    resp.innerHTML = '<p>Clicou no segundo botao</p>'
}
function acao3(){
    resp.innerHTML = '<p>Clicou no terceiro botao</p>'
}
function acao4(){
    resp.innerHTML = '<p>Clicou no quarto botao</p>'
}

function calc(){
    let res = document.getElementById('res')
   
    let numero = Number(window.prompt(`Coloque o número que deseja calcular`))
    let metade = numero * 0.5
    let dobro = numero * 2

    res.innerHTML = `<p>O dobro de ${numero} é ${dobro} e a metade é ${metade}</p>`    
}

function soma(){
    let res2 = document.getElementById('res2')

    let n1 = Number(window.prompt('Coloque o primeiro número')) 
    let n2 = Number(window.prompt('Coloque o segundo número'))
    let soma = n1 + n2

    res2.innerHTML = `A soma dos números ${n1} e ${n2} é: ${soma}`
}