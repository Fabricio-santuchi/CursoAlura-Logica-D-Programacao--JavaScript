let totalGeral = 0;
limpar();

function adicionar(){
    //recuperar valores:nome do produto, quantidade e valor.
    let produto = document.querySelector('.produto-input').value;
    let nomeProduto = produto.split('-')[0]; // pega o nome que esta antes do -
    let valorProduto = produto.split('R$')[1]; // pega valor depois do -
    let quantidadeDoProduto = document.querySelector('.quantidade-input').value;

    //calcular o preço, o nosso subtotal.
    let preco = quantidadeDoProduto * valorProduto;

    //adicionar no carrinho.
    let carrinho = document.querySelector('.carrinho__produtos');
    carrinho.innerHTML += `
    <section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidadeDoProduto}x</span>
     ${nomeProduto}
    <span class="texto-azul">${preco}</span>
    </section>`

    //atualizar o valor total.
    totalGeral += preco;
    
    let campoTtl = document.querySelector('#valor-total');
    campoTtl.textContent = `R$ ${totalGeral}`;

    //final a qtde = 0.
    document.querySelector('.quantidade-input').value = 0;
}
function limpar(){
    totalGeral = 0;
    document.querySelector('.carrinho__produtos').innerHTML = '';
    document.querySelector('#valor-total').textContent = 'R$ 0';
}