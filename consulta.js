var produtos = JSON.parse(localStorage.getItem('produtos'))

if (produtos == null) {
    produtos = []
}

var tabela = document.getElementById('tabula') //chama a tabela no html

for (i = 0; i < produtos.length; i++) { // looping para adicionar os produtos e caracterísitcas do cadastro na tabela
    var produto = produtos[i]
    var pname = produto['pname']
    var ns = produto['ns']
    var equip = produto['equip']
    var carac = produto['carac']

    var th = tabula.insertRow(1)
    var td = [th.insertCell(0), th.insertCell(1), th.insertCell(2), th.insertCell(3)]
    td[0].innerHTML = pname
    td[2].innerHTML = ns
    td[1].innerHTML = equip
    td[3].innerHTML = carac
}


