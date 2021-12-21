var count = 0;
document.getElementById('texto').addEventListener('keyup', qtdCaracterAtualizar)
document.getElementById('texto').addEventListener('keydown', qtdCaracterAtualizar)
document.getElementById('limpar').addEventListener('click', () => {

    var palavroes = [
        'cu',
        'merda',
        'porra',
        'corno',
        'puto',
    ];
    var texto = document.getElementById('texto')
        .value
        .toLowerCase()
    for (var palavrao of palavroes) {
        let regex = new RegExp(`${palavrao}`, 'g')
        texto = texto.replace(regex, '***')
    }
    var countCensura = texto.split(' ')
    console.log(texto)
    console.log(countCensura)

    for (var censura of countCensura) {
        if (censura == '***') {
            count++;
        }
    }
    console.log(count)
    document.getElementById('limpar').innerText = 'Limpar outra frase'
    if (count == 1) {

        document.getElementById('qtdCensurado').innerText = count + ' palavrão foi removido :)'
    } else if(count >1) {
        document.getElementById('qtdCensurado').innerText = count + ' palavrões foram removidos :)'
    } else if(count == 0){
        alert('Sua frase já está limpinha ;)')
    }
    count = 0;
})

function qtdCaracterAtualizar() {
    const texto = document.getElementById('texto').value.length
    console.log(texto)
    document.getElementById('qtdCaracter').innerText = texto + '/255 caracteres'
}

