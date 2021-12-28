function tabuada() {
    var numero = window.document.getElementById('numero')
    var resultado = window.document.getElementById('resultado')
    var tabuada = Number(numero.value)
    
    if (tabuada == undefined || tabuada == null) {
        alert('ERRO: Digite um número')
    }else {
        for(var i = 1; i <= 10; i++) {
            var res = tabuada * i
            resultado.innerHTML += `${tabuada} x ${i} = ${res}<br />`
        }
    }

}