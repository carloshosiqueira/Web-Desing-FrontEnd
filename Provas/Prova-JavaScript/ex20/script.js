function estação() {
    let mês = prompt('Digite o mês por extenso ou por número').toUpperCase();
    let saída = document.querySelector('section#saida')
    let estação
    console.log(mês)
    switch (mês) {
        case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO': case '1': case '2': case '3':
            estação = 'INVERNO'
            break
        case 'ABRIL': case 'MAIO': case 'JUNHO': case '4': case '5': case '6':
            estação = 'PRIMAVERA'
            break
        case 'JULHO': case 'AGOSTO': case 'SETEMBRO': case '7': case '8': case '9':
            estação = 'VERÃO'
            break
        case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO': case '10': case '11': case '12':
            estação = 'OUTONO'
            break
        default:
            estação = 'INDEFINIDA'
            break
    }
    saída.innerHTML = `<p>No mês <mark>${mês}</mark>, estamos na estação <mark><strong>${estação}</strong></mark>.</p>`
}