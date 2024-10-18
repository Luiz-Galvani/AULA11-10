function criarComponentes() {
    var body = document.body;
  
    //Criação de títulos
    var titulo = document.createElement("h2");
    titulo.textContent = "Apenas um título";
    body.appendChild(titulo);
  
    //Criação de parágrafos
    var paragrafo1 = document.createElement("p");
    paragrafo1.id = "paragrafo1";
    //paragrafo1.classList.add("select");
    paragrafo1.textContent = "O parágrafo 1";
    body.appendChild(paragrafo1);
  
    var paragrafo2 = document.createElement("p");
    paragrafo2.id = "paragrafo2";
    paragrafo2.classList.add("select");
    paragrafo2.textContent = "O parágrafo 2";
    body.appendChild(paragrafo2);
  
    //Criação de um botão
    var botao = document.createElement("button");
    botao.textContent = "Clique-me";
    botao.onclick = function () {
      alert("Você clicou no botão!");
      //criarComponentes()
    };
    body.appendChild(botao);
  
    //Criação de uma lista não ordenada
    var listaNaoOrdenada = document.createElement("ul");
    listaNaoOrdenada.id = "listaNaoOrdenada";
    var itens = ["Item 1", "Item 2", "Item 3"];
  
    for (var i = 0; i < itens.length; i++) {
      var item = document.createElement("li");
      item.textContent = itens[i];
      listaNaoOrdenada.appendChild(item);
    }
    body.appendChild(listaNaoOrdenada);
  
    //Criação de uma lista ordenada
    var listaOrdenada = document.createElement("ol");
    var itensO = ["Primeiro", "Segundo", "Terceiro"];
  
    for (var i = 0; i < itensO.length; i++) {
      var item = document.createElement("li");
      item.textContent = itensO[i];
      listaOrdenada.appendChild(item);
    }
    body.appendChild(listaOrdenada);
  
    //Criação de um link
    var link = document.createElement("a");
    link.textContent = "Visitar Google";
    link.href = "http://www.google.com";
    link.target = "_blank";
    body.appendChild(link);
  
    body.appendChild(document.createElement("br"));
    body.appendChild(document.createElement("br"));
  
    //Criação de um caixa de texto
    var inputTexto = document.createElement("input");
    inputTexto.type = "text";
    inputTexto.placeholder = "Digite algo...";
    body.appendChild(inputTexto);
  
    //Quebras de linhas
    body.appendChild(document.createElement("br"));
    body.appendChild(document.createElement("br"));
  
    //Criação de um caixa suspensa
    var select = document.createElement("select");
    var opcoes = ["Opção 1", "Opção 2", "Opção 3"];
    for (var i = 0; i < opcoes.length; i++) {
      var opcao = document.createElement("option");
      opcao.value = opcoes[i];
      opcao.textContent = opcoes[i];
      select.appendChild(opcao);
    }
    body.appendChild(select);
  
    //Quebras de linhas
    body.appendChild(document.createElement("br"));
    body.appendChild(document.createElement("br"));
  
    //Criação de checkbox
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "aceitar";
    var labelCheckBox = document.createElement("label");
    labelCheckBox.htmlFor = "aceitar";
    labelCheckBox.textContent = "Aceito os termos e condições";
    body.appendChild(checkbox);
    body.appendChild(labelCheckBox);
  
    //Quebras de linhas
    body.appendChild(document.createElement("br"));
    body.appendChild(document.createElement("br"));
  
    //Criação de imagem
    var imagem = document.createElement("img");
    imagem.src =
      "https://cursinhoparamedicina.com.br/wp-content/uploads/2022/10/Paisagem-1.jpg";
    imagem.alt = "Imagem de exemplo";
    body.appendChild(imagem);
  }
  
  let btnExecutar = document.getElementById("btnExecutar");
  btnExecutar.onclick = criarComponentes;
  
  function removerComponentes() {
    var body = document.body;
  
    //Remoção de parágrafo
    var paragrafo1 = document.getElementById("paragrafo1");
    body.removeChild(paragrafo1);
  
    //Remoção de itens de uma lista não ordenada
    var listaNaoOrdenada = document.getElementById("listaNaoOrdenada");
    // for (var i = 0; i < listaNaoOrdenada.children.length; i++) {
    //   var item = listaNaoOrdenada.children[i];
    //   listaNaoOrdenada.removeChild(item);
    // }  
    for (var i = listaNaoOrdenada.children.length - 1; i >= 0; i--) {
       var item = listaNaoOrdenada.children[i];
       listaNaoOrdenada.removeChild(item);
    }
  
  }
  
  let btnRemover = document.getElementById("btnRemover");
  btnRemover.onclick = removerComponentes;
  
  