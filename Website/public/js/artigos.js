function atualizarArtigo(artigos) {
    var contentArtigo = document.getElementById("content_article");
    contentArtigo.innerHTML = "";
    for (let i = 0; i < artigos.length; i++) {
        var artigo = artigos[i];
        // Conteúdo Item
        var conteudoArtigo = document.createElement("article")
        // Estilizando HTML
        conteudoArtigo.innerHTML = `
        <!-- Primeiro Paragráfo -->
        <h2>${artigo.subTitulo1}</h2>
        <p>${artigo.p1}</p>
        <!-- Segundo Paragráfo -->
        <h2>${artigo.subTitulo2}</h2>
        <p>${artigo.p2}</p>`;
        // Adiciona a classe
        conteudoArtigo.className = "container-article";
        contentArtigo.appendChild(conteudoArtigo);
    }
}
// Recupera Artigo pelo id da Publicação
function obterArtigoId(fkPublicacao) {
    // aguardar();
    var fkPublicacao = sessionStorage.fkPublicacao;
    fetch(`/artigos/${fkPublicacao}`)
    .then(resposta => {
        if (resposta.ok) {
            resposta.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
               
                atualizarArtigo(resposta);   
                // Atualiza url e Titulo da Página
                var titulo = sessionStorage.titulo.toLowerCase();
                window.history.pushState('','',`${titulo.replace(/[\W+]+/ig,"-")}`);
                document.title = sessionStorage.titulo;
                // finalizarAguardar();
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
            finalizarAguardar("Nenhum resultado encontrado ou erro na API");
        }
    })
    .catch(function (error) {
        console.error(`Erro na obtenção das publicações: ${error.message}`);
    });
}