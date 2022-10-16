/*
1 LISTAR OS ELEMENTOS QUE REPRESENTAM ABAS NO HTML
2 IDENTIFICAR O CLIQUE NO ELEMENTO DA ABA
3 QUANDO O USUARIO CLICAR DESMARCAR A ABA SELECIONADA
4 MARCAR A ABA CLICADA COMO SELECIONADO
5 ESCONDER O CONTEÚDO ANTERIOR
6 MOSTRAR O CONTEUDO DA ABA SELECIONADA
*/

// 1 LISTAR OS ELEMENTOS QUE REPRESENTAM ABAS NO HTML
const abas = document.querySelectorAll(".aba");
abas.forEach(aba => {

    //2 IDENTIFICAR O CLIQUE NO ELEMENTO DA ABA
    aba.addEventListener("click", function () {

        if (aba.classList.contains("selecionado")) {
            return;
        };

        selecinarAba(aba)

        mostrarInformacoesDaAba(aba)

    });
});

function selecinarAba(aba) {
    //3 QUANDO O USUARIO CLICAR DESMARCAR A ABA SELECIONADA
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");

    //4 MARCAR A ABA CLICADA COMO SELECIONADO
    aba.classList.add("selecionado");
}

function mostrarInformacoesDaAba(aba) {
    //5 ESCONDER O CONTEÚDO ANTERIOR
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");

    //6 MOSTRAR O CONTEUDO DA ABA SELECIONADA
    const idElementoInformacaoAba = `informacao-${aba.id}`;

    const infomacaoASerMostrada = document.getElementById(idElementoInformacaoAba)
    infomacaoASerMostrada.classList.add("selecionado")
}