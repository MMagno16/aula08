var carta1 = {
    nome: "Branca de Neve",
    imagem:
      "http://pa1.narvii.com/6922/f65419f111cfa8d9013407db44819f4063911e05r1-498-326_00.gif",
    atributos: {
      Delicadeza: 8,
      Aventureira: 6,
      Vestido: 6
    }
  };
  
  var carta2 = {
    nome: "Cinderela",
    imagem:
      "http://pa1.narvii.com/6725/9cf307310a20c46f2434d744bacf6b1118bab958_00.gif",
    atributos: {
      Delicadeza: 10,
      Aventureira: 5,
      Vestido: 10
    }
  };
  
  var carta3 = {
    nome: "Aurora",
    imagem: "https://cdn.mensagenscomamor.com/content/images/m000494889.gif?v=1",
    atributos: {
      Delicadeza: 9,
      Aventureira: 2,
      Vestido: 5
    }
  };
  
  var carta4 = {
    nome: "Bela",
    imagem: "https://i.gifer.com/origin/d0/d0cf5a29684cdc48e7a5e07eb62632d2.gif",
    atributos: {
      Delicadeza: 7,
      Aventureira: 7,
      Vestido: 10
    }
  };
  
  var carta5 = {
    nome: "Ariel",
    imagem: "https://c.tenor.com/LRHBHHAphvUAAAAC/ariel-ariel-little-mermaid.gif",
    atributos: {
      Delicadeza: 5,
      Aventureira: 10,
      Vestido: 5
    }
  };
  
  var carta6 = {
    nome: "Rapunzel",
    imagem: "https://c.tenor.com/l6OEP5URnFYAAAAC/tangled-rapunzel.gif",
    atributos: {
      Delicadeza: 2,
      Aventureira: 10,
      Vestido: 6
    }
  };
  
  var carta7 = {
    nome: "Moana",
    imagem: "https://c.tenor.com/VxE51hcXYc4AAAAC/disney-moana.gif",
    atributos: {
      Delicadeza: 4,
      Aventureira: 10,
      Vestido: 2
    }
  };
  
  var carta8 = {
    nome: "Merida",
    imagem: "https://i.gifer.com/QKFr.gif",
    atributos: {
      Delicadeza: 1,
      Aventureira: 10,
      Vestido: 7
    }
  };
  
  var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8];
  
  var cartaMaquina;
  var cartaJogador;
  
  function sortearCarta() {
    //ParseInt= para criar números Inteiros.
    //Random= Números aleatórios.
    var numeroCartaMaquina = parseInt(Math.random() * 8);
    cartaMaquina = cartas[numeroCartaMaquina];
    //console.log(cartaMaquina);
  
    var numeroCartaJogador = parseInt(Math.random() * 8);
    //While= Enquanto for igual, sorteia novamente.
    while (numeroCartaMaquina == numeroCartaJogador) {
      numeroCartaJogador = parseInt(Math.random() * 8);
    }
  
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);
  
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    //exibirOpcoes();
    exibirCartaJogador();
  }
  
  
  function obtemAtributoSelecionado() {
    //GetElementsByName, está pegando o atributo do Input type NAME.
    var radioAtributos = document.getElementsByName("atributo");
  
    for (var i = 0; i < radioAtributos.length; i++) {
      //[i] indice.
      if (radioAtributos[i].checked == true) {
        return radioAtributos[i].value;
      }
    }
  }
  
  function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.getElementById("resultado");
  
    if (
      cartaJogador.atributos[atributoSelecionado] >
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado =
        "VOCÊ VENCEU!!! - A sua princesa era " +
        cartaJogador.nome +
        " e a outra princesa era " +
        cartaMaquina.nome;
    } else if (
      cartaJogador.atributos[atributoSelecionado] <
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado =
        " VOCÊ PERDEU!!! - A sua princesa era " +
        cartaJogador.nome +
        " e a outra princesa era " +
        cartaMaquina.nome;
    } else {
      htmlResultado =
        "EMPATOU!!! - A sua princesa era " +
        cartaJogador.nome +
        " e a outra princesa era " +
        cartaMaquina.nome;
    }
  
    divResultado.innerHTML = htmlResultado;
  
    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina();
  }
  
  function exibirCartaJogador() {
    //carta-jogador, DIV pegando do HTML
    var divCartaJogador = document.getElementById("carta-jogador");
    //($) avisa q p código é de javascript
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; heigth: inherit; position: absolute;">';
  
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
  
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        "" +
        cartaJogador.atributos[atributo] +
        "<br>";
    }
  
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  
  function exibirCartaMaquina() {
    //carta-jogador, DIV pegando do HTML
    var divCartaMaquina = document.getElementById("carta-maquina");
    //($) avisa q p código é de javascript
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; heigth: inherit; position: absolute;">';
  
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
  
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto +=
        "<p type='text' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        "" +
        cartaMaquina.atributos[atributo] +
        "</p>";
    }
  
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  