// Botão
let meuBotao = document.querySelector('button');

function orderAlph(input) {
    let inputArray;
    inputArray = input.split('');
    inputArray = inputArray.sort();
    inputArray = inputArray.toString();
    return inputArray;
}

meuBotao.onclick = function() {
    let firstInput = document.querySelector('#firstInput').value;
    let secondInput = document.querySelector('#secondInput').value;

    firstInput = firstInput.toLowerCase();
    secondInput = secondInput.toLowerCase();

    firstInput = orderAlph(firstInput);
    secondInput = orderAlph(secondInput);

    if(firstInput.length === secondInput.length && firstInput === secondInput ) {
        alert('Pimba, suas palavras são um anagrama!')
    } else { 
        alert('Não é um anagrama.')
    }
}
