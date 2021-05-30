    // function publicar() {
    //     console.log("entrei!")
    //     aguardar();
    //     var formulario = new URLSearchParams(new FormData(form_publicar));
    //     var idUsuario = sessionStorage.id_usuario_meuapp;
    //     fetch(`/publicacoes/publicar/${idUsuario}`, {
    //         method: "POST",
    //         body: formulario
    //     }).then(resposta => {

    //         if (resposta.ok) {
    //             obterPublicacoes();

    //             finalizarAguardar();
    //         } else {
    //             console.log('Erro ao publicar!');
    //             resposta.text().then(texto => {
    //                 console.error(texto);
    //                 finalizarAguardar(texto);
    //             });
    //         }
    //     });

    //     return false;
    // }

    function atualizarFeed(publicacoes) {
        var feed = document.getElementById("content_itens");
        feed.innerHTML = "";
        for (let i = 0; i < publicacoes.length; i++) {
            var publicacao = publicacoes[i];

            // Conteúdo Item
            var divPublicacao = document.createElement("a")

            // Estilizando HTML
            divPublicacao.innerHTML = `
            <!-- Imagem -->
            <figure class="item-img">
              <img src="${publicacao.img}">
            </figure>
            <!-- Texto -->
            <article class="item-text">
              <!-- Titulo -->
              <h3>${publicacao.id} <br>
              ${publicacao.titulo}</h3>
              <!-- Autor -->
              <div class="principal-author">
                <img src="imgs/profile.png" alt="Foto Autor">
                <span class="span-author">${publicacao.autor}</span>
                <span class="span-rate"><i class="bi bi-star-fill"></i> ${publicacao.nota}</span>
              </div>
            </article>`;

            // Adiciona a classe
            divPublicacao.className = 'container-item';
            divPublicacao.id = `container_item${i+1}`;
            divPublicacao.href = 'artigo.html';

            feed.appendChild(divPublicacao);
        }
    }

    function obterPublicacoes() {
        // aguardar();
        fetch("/publicacoes")
        .then(resposta => {
            if (resposta.ok) {
                resposta.json().then(function (resposta) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                   
                    atualizarFeed(resposta);

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

    function teste(){
        sessionStorage.setItem('id', '1');
        console.log(sessionStorage)
        window.location.href = 'artigo.html'
    }

    // function obterPublicacoesPorUsuario(idUsuario) {
    //     fetch(`/publicacoes/${idUsuario}`)
    //     .then(resposta => {
    //         if (resposta.ok) {
    //             resposta.json().then(function (resposta) {
    //                 console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
    //                 // alert(JSON.stringify(resposta))
    //             });
    //         } else {
    //             console.error('Nenhum dado encontrado ou erro na API');
    //         }
    //     })
    //     .catch(function (error) {
    //         console.error(`Erro na obtenção das publicações do usuário: ${error.message}`);
    //     });
    // }

    // function aguardar() {
    //     btn_publicar.disabled = true;
    //     img_aguarde.style.visibility = 'visible';
    //     div_erro.style.visibility = 'hidden';
    // }

    // function finalizarAguardar(resposta) {
    //     btn_publicar.disabled = false;
    //     img_aguarde.style.visibility = 'hidden';
    //     if (resposta) {
    //         div_erro.style.visibility = 'visible';
    //         div_erro.innerHTML = resposta;
    //     }
    // }

    // verificar_autenticacao();