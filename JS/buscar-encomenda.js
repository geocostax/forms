document.addEventListener("DOMContentLoaded", function() {
    var botaoBuscar = document.querySelector("#buscar-encomendas");
  
    botaoBuscar.addEventListener("click", function() {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "encomendas.json");
      xhr.addEventListener("load", function() {
        var resposta = xhr.responseText;
        var encomendas = JSON.parse(resposta);
  
        encomendas.forEach(function(cada_encomenda) {
          adicionarEncomendaNaTabela(cada_encomenda);
        });
      });
      xhr.send();
    });
  
    function adicionarEncomendaNaTabela(encomenda) {
      var tabela = document.getElementById('tabela-cliente').getElementsByTagName('tbody')[0];
      var novaLinha = document.createElement('tr');
  
      var celulaNome = document.createElement('td');
      celulaNome.textContent = encomenda.nome;
      novaLinha.appendChild(celulaNome);
  
      var celulaProduto = document.createElement('td');
      celulaProduto.textContent = encomenda.produto;
      novaLinha.appendChild(celulaProduto);
  
      var celulaQuantidade = document.createElement('td');
      celulaQuantidade.textContent = encomenda.quantidade;
      novaLinha.appendChild(celulaQuantidade);
  
      var celulaValorUnitario = document.createElement('td');
      celulaValorUnitario.textContent = 'R$ ' + encomenda.valorUnitario.toFixed(2);
      novaLinha.appendChild(celulaValorUnitario);
  
      var celulaTotal = document.createElement('td');
      celulaTotal.textContent = 'R$ ' + (encomenda.quantidade * encomenda.valorUnitario).toFixed(2);
      novaLinha.appendChild(celulaTotal);
  
      tabela.appendChild(novaLinha);
    }
  });
  