document.addEventListener("DOMContentLoaded", function() {
    var botaoEnviar = document.querySelector('.box button[type="submit"]');
    botaoEnviar.addEventListener("click", function(event) {
        event.preventDefault(); // Evita o comportamento padrão de envio do formulário

        var nome = document.getElementById("nome").value;
        var quantidade = document.getElementById("quantidade").value;
        var produto = document.getElementById("produto").value;
        var valorUnitario = parseFloat(document.getElementById("valor_unitario").value); // Convertendo para número


        //pop up caso o formulario nao esteja preenchido corretamente
        if (nome.trim() === "" || quantidade.trim() === "" || produto.trim() === "" || isNaN(valorUnitario) || valorUnitario <= 0) {
            alert("Por favor, preencha todos os campos corretamente.");
            return; // Impede o envio do formulário se os campos não estiverem corretos
        }


        

        // Se todos os campos estiverem preenchidos, continuar com o restante do código

        // Formatando o valor unitário como moeda
        var valorUnitarioFormatado = valorUnitario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        var tabela = document.getElementById("tabela-cliente");
        var novaLinha = tabela.insertRow();
        var colunaNome = novaLinha.insertCell(0);
        var colunaProduto = novaLinha.insertCell(1);
        var colunaQuantidade = novaLinha.insertCell(2);
        var colunaValorUnitario = novaLinha.insertCell(3);
        var colunaTotal = novaLinha.insertCell(4);

        colunaNome.innerHTML = nome;
        colunaProduto.innerHTML = produto;
        colunaQuantidade.innerHTML = quantidade;
        colunaValorUnitario.innerHTML = valorUnitario; // Inserindo valor formatado
        colunaTotal.innerHTML = (quantidade * valorUnitario).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); // Formatando o total também
        
        // Limpa o formulário após o envio
       // Limpa os campos do formulário após o envio
       document.getElementById("nome").value = "";
       document.getElementById("quantidade").value = "";
       document.getElementById("produto").value = "";
       document.getElementById("valor_unitario").value = "";

       
    });


//doubleclik exclui linha adicionada no formulario
    var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500);
})


});

