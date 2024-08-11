const botoesCarrossel = document.querySelectorAll(".botao");
const imagem = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

//- identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
  botao.addEventListener("click", () => {

    //- Desmarcar o botão selecionado anterior
    desativarBotaoSelecionado();

        //- Marcar o botão selecionado
        marcarBotaoSelecionado(botao);

        //- Esconder a imagem anteriormente selecionada
        esconderImagemAtiva();
    
        //- Fazer aparecer a imagem correspondente ao botão clicado   
       mostrarImagemDeFundo(indice);

       //- Esconder a informação do anteriormente selecionado
       esconderInformacoesAtivas();

       //- Mostrar a informação referente ao botão clicado
       mostrarInformacoes(indice);
    


  });
});

function marcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function mostrarInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
}

function esconderInformacoesAtivas() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}

function mostrarImagemDeFundo(indice) {
    imagem[indice].classList.add("ativa");
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

