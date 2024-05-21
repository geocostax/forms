// Captura todas as encomendas
var clientes = document.querySelectorAll(".cliente");

for (var count = 0; count < clientes.length; count++) {
    var qtde = parseFloat(clientes[count].querySelector(".quant").textContent);
    var unitario = parseFloat(clientes[count].querySelector(".unit").textContent);
    
    if (!validaQTDE(qtde)) {
        qtdeInvalida(clientes[count]);
    } else if (!validaUNI(unitario)) {
        valorInvalido(clientes[count]);
    } else {
        calcularTotalEncomenda(clientes[count], qtde, unitario);
    }
}

// Função para o cálculo do valor total
function calculaTotal(qtdeEncomenda, unitarioProduto) {
    var total = qtdeEncomenda * unitarioProduto;
    return formataValor(total);
}

// Função de validação para o preço unitário
function validaUNI(valor) {
    if (valor < 1 || isNaN(valor)) {
        return false;
    } else {
        return true;
    }
}

// Função de validação para a quantidade
function validaQTDE(valor) {
    if (valor < 1 || isNaN(valor)) {
        return false;
    } else {
        return true;
    }
}

// Função para formatar o valor
function formataValor(valor) {
    return parseFloat(valor).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

// Função para lidar com quantidade inválida
function qtdeInvalida(cliente) {
    cliente.querySelector(".quant").textContent = "QTDE INVÁLIDA!";
    cliente.querySelector(".quant").style.color = "blue";
}

// Função para lidar com valor inválido
function valorInvalido(cliente) {
    cliente.querySelector(".unit").textContent = "VALOR INVÁLIDO!";
    cliente.classList.add("info-invalida");
}

// Função para calcular o valor total da encomenda
function calcularTotalEncomenda(cliente, qtde, unitario) {
    cliente.querySelector(".unit").textContent = formataValor(unitario);
    cliente.querySelector(".tot").textContent = calculaTotal(qtde, unitario);
}
