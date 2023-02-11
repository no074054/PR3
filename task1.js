const firstRow = prompt('Введите первое предложение');
const secondRow = prompt('Введите второе предложение');
const symbol = prompt('Введите букву, количество которой в предложениях надо подсчитать');

function getRow(firstR, secondR, s) {
    var n1 = 0;
    var n2 = 0;

    for(let i = 0; i < firstR.length; i++) {
        if(firstR.charAt(i) == s) n1 += 1;
    }

    for(let i = 0; i < secondR.length; i++) {
        if(secondR.charAt(i) == s) n2 += 1;
    }

    if(n1 > n2) {
        alert('В первом предложении букв "' + s +  '" больше. Их ' + n1 + '. Во втором предложении их ' + n2);
    } else if (n1 < n2) {
        alert('Во втором предложении букв "' + s +  '" больше. Их ' + n2 + '. В первом предложении их ' + n1);
    } else {
        alert('Букв в обоих предложениях одинаковое количество. Их ' + n1);
    }
}

getRow(firstRow, secondRow, symbol);