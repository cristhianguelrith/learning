function showTable() {
    var numberInput = window.document.getElementById('numberInput').value
    var plusResultTable = window.document.getElementById('plusResultTable')
    var minusResultTable = window.document.querySelector('#minusResultTable')
    var multiplyResultTable = window.document.querySelector('#multiplyResultTable')
    var divideResultTable = window.document.querySelector('#divideResultTable')
    
    plusResultTable.innerHTML = (``)
    minusResultTable.innerHTML = (``)
    multiplyResultTable.innerHTML = (``)
    divideResultTable.innerHTML = (``)

        // Validação de Entrada
    if (numberInput == '') {
        window.alert('É necessário que digite um número!')
    } else {
            // Operação de Soma
        for (var a = 1; a <= 10; a++) {
            r = 0
            r = Number(numberInput) + Number(a)

            if (r != parseInt(r)) {
                var rx = 0
                rx = r
                r = rx.toFixed(2)
            }

            plusResultTable.innerHTML += (`<p>${numberInput} + ${a} = <span>${r}</span></p>`)
        }

            // Operação de Subtração
        for (var b = 1; b <= 10; b++) {
            r = 0
            r = Number(numberInput) - Number(b)

            if (r != parseInt(r)) {
                var rx = 0
                rx = r
                r = rx.toFixed(2)
            }

            minusResultTable.innerHTML += (`<p>${numberInput} - ${b} = <span>${r}</span></p>`)
        }
        
            // Operação de Multiplicação
        for (var c = 1; c <= 10; c++) {
            r = 0
            r = Number(numberInput) * Number(c)

            if (r != parseInt(r)) {
                var rx = 0
                rx = r
                r = rx.toFixed(2)
            }

            multiplyResultTable.innerHTML += (`<p>${numberInput} * ${c} = <span>${r}</span></p>`)
        }
            
            // Operação de Divisão
        for (var d = 1; d <= 10; d++) {
            r = 0
            r = Number(numberInput) / Number(d)

            if (r != parseInt(r)) {
                var rx = 0
                rx = r
                r = rx.toFixed(2)
            }

            divideResultTable.innerHTML += (`<p>${numberInput} / ${d} = <span>${r}<span></p>`)
        }
    }
}