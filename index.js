function criaComponentes(){
    var body = document.body
    //Criação de títulos
    var titulo = document.createElement("h2")
    titulo.textContent = "Título 1"
    body.appendChild(titulo)


    //Criação de parágrafos
    var paragrafo = document.createElement("p")
    paragrafo.textContent = "O paragrafo 1"
    body.appendChild(paragrafo)

    //Criação de um botão
    var botao = document.createElement("button")
    botao.textContent = "Clique me"
    botao.onclick = criaComponentes
    body.appendChild(botao)

    //Criação de uma lista não ordenada
    var listaNaoOrdenada = document.createElement("ul")
    var itens = ["Item 1", "Item 2", "Item 3"]
    for (var i =0;i<itens.length;i++){
        var item = document.createElement("l1")
        item.textContent = items[i]
        listaNaoOrdenada.appendChild(item)

    }
    body.appendChild(listaNaoOrdenada)
}
let btnExecutar = document.getElementById("btnExecutar");
btnExecutar.onclick = criaComponentes
