function atualizarFeedRandom(publicacoes){
  var feed = document.getElementById("testando");
  feed.innerHTML = "";
  var random = parseInt(Math.random () *5) + 1;
  for (let i = 1; i<=random; i++) {
    var publicacao = publicacoes[i];
    // Conteúdo Item
    // Estilizando HTML
    feed.innerHTML = `
      <article class="principal-article" id="teste${i + 1}" onclick="obterID(this)">
          <!-- Titulo -->
          <h1>${publicacao.titulo}</h1>
          <!-- Autor/Nota -->
          <div class="principal-author">
              <img src="imgs/profile.png" alt="Foto Autor">
              <span class="span-author">${publicacao.autor}</span>
              <span class="span-rate"><i class="bi bi-star-fill"></i></span>
          </div>
          <!-- Descrição -->
          <p>${publicacao.descricao}</p>
          <!-- Botão -->
          <button class="btn principal-btn">Visualizar</button>
      </article>`;
      feed.style.background = `url(${publicacao.img})`;
      feed.style.backgroundRepeat = 'no-repeat';
      feed.style.backgroundSize = 'cover';
      feed.style.backgroundPosition = 'top';
      feed.style.backgroundBlendMode = 'darken';
  }  
}
// Adciona ao HTML os dados
function atualizarFeed(publicacoes) {
  var feed = document.getElementById("content_itens");  
  feed.innerHTML = "";
  content_itens.innerHTML += `
  <!-- Métrica -->
  <article class="container-metricas">
  <h1>Resenhas Encontradas: ${publicacoes.length}</h1>
  </article>
  `;
  for (let i = 0; i < publicacoes.length; i++) {
    var publicacao = publicacoes[i];
    // Conteúdo Item
    var divPublicacao = document.createElement("div");
    // Estilizando HTML
    divPublicacao.innerHTML += `            
            <div id="teste${i + 1}" onclick="obterID(this)">
            <!-- Imagem -->
            <figure class="item-img">
              <img src="${publicacao.img}">
            </figure>
            <!-- Texto -->
            <article class="item-text">
              <!-- Titulo -->
              <h1 style="display:none;">${publicacao.id}</h1>
              <h3>${publicacao.titulo}</h3>
              <!-- Autor -->
              <div class="principal-author">
                <img src="imgs/profile.png" alt="Foto Autor">
                <span class="descricao" style="display:none;">${publicacao.descricao}</span>
                <span class="span-author">${publicacao.autor}</span>                
                <span class="span-rate"><i class="bi bi-star-fill"></i> ${publicacao.nota}</span>
              </div>
            </article>
            </div>`;
    // Adiciona a classe
    divPublicacao.className = "container-item";
    feed.appendChild(divPublicacao);
  }  
}

// Pega as publicações
function obterPublicacoes() {
  verificar_autenticacao();
  // aguardar();
  fetch("/publicacoes")
    .then((resposta) => {
      if (resposta.ok) {
        resposta.json().then(function (resposta) {
          console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

          atualizarFeed(resposta);
          atualizarFeedRandom(resposta);
        });
      } else {
        console.error("Nenhum dado encontrado ou erro na API");
        finalizarAguardar("Nenhum resultado encontrado ou erro na API");
      }
    })
    .catch(function (error) {
      console.error(`Erro na obtenção das publicações: ${error.message}`);
    });
}

// Seleciona a publicação
function obterID(obj,fkPublicacao){
  // Define o elemento em variável
  var item = obj.id;
  // Seleciona o item
  // fkArtigo
  var fkPublicacao = document.querySelector(`#${item} > .item-text > h1`).textContent;
  // Caminho da Imagem
  var srcImg = document.querySelector(`#${item} > .item-img > img`).src;
  // Titulo
  var titulo = document.querySelector(`#${item} > .item-text > h3`).textContent;
  // Nota
  var nota = document.querySelector(`#${item} > .item-text > .principal-author > .span-rate`).textContent;
  // Descrição
  var descricao = document.querySelector(`#${item} > .item-text > .principal-author > .descricao`).textContent;
  // Armazena no Session Storage
  sessionStorage.setItem('fkPublicacao', `${fkPublicacao}`);      
  sessionStorage.setItem('imgSource', `${srcImg}`);      
  sessionStorage.setItem('titulo', `${titulo}`);      
  sessionStorage.setItem('nota', `${nota}`);      
  sessionStorage.setItem('descricao', `${descricao}`);      
  // Redireciona
  window.location.href = 'artigo.html';
}