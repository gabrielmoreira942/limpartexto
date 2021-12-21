var count = 0;
var countclick = 0;
document.getElementById('texto').addEventListener('keyup', qtdCaracterAtualizar)
document.getElementById('texto').addEventListener('keydown', qtdCaracterAtualizar)

document.getElementById('limpar').addEventListener('click', () => {
    countclick++;
    console.log(countclick)
    if (countclick == 2) {
        document.location.reload()
    }
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
        var arrayText = texto.split(palavrao)

        texto = arrayText.join('***') //CENSURA

        count = count + arrayText.length - 1; //QUANTIDADE
    }
    
    document.getElementById('limpar').innerText = 'Limpar outra frase'
    if (count == 1) {
        document.getElementById('qtdCensurado').innerText = count + ' palavrão foi removido :)'
    } else if (count > 1) {
        document.getElementById('qtdCensurado').innerText = count + ' palavrões foram removidos :)'
    } else if (count == 0 && texto.length != 0 && countclick == 1) {
        console.log(count)
        alert('Sua frase já está limpinha ;)')
    }
    document.getElementById('texto').value = texto
    count = 0;
})
function qtdCaracterAtualizar() {
    const texto = document.getElementById('texto').value.length
    document.getElementById('qtdCaracter').innerText = texto + '/255 caracteres'
}

