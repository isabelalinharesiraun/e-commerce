const inputBusca = document.getElementById('inputbusca');
const contador = document.getElementById('contador-carrinho');
const botoesComprar = document.querySelectorAll('btn-cmprar');
const cards = document.querySelectorAll('produto-card');

let totalitens = 0;

//evento Clique(adiciona ao carrinho)
botoesComprar.forEach(botao =>{
    botao.addEventListener('click', () =>{
        totalitens++;
        contador.textContent = totalItens;

        //feedback visual 
        botao.innerHTML = "Adicionado!";
        botao.style.backgroundColor = '#27ae60';

        setTimeout(()=>{
            botao.innerText = "adicionarao carrinho";
            botao.style.backgroundColor = '#2ecc71';
        }, 1000);
        
    });

});

//filtro de busca 
inputBusca.addEventListener('input',(e)=>{
    const termo = e.target.value.toLowerCase();

    cards.forEach(card =>{
        const nomeProduto = card.querySelector('h3').innerText.toLowerCase();

        if(nomeProduto.includes(termos)){
            card.style.display = "block";
        }
        else {
            card.style.display = "none"; 
        }

    });

});

//selectores adicionais

    const listaCarrinho = document.getElementById('lista-carrinho');
    const subtotalDisplay = document.getElementById('subtotal');
    const selectfrete = document.getElementById('select-frete');
    const formCheckout = document.getElementById('form-checkout');
    const notaFiscalArea = document.getElementById('nota-fiscal');

    let itensCarrinho = [];

    function atulizacarrinho(){
        listaCarrinho.innerHTML = "";
        let soma = 0;

        itensCarrinho.forEach((item,index)=>{
            soma += item.preco;

            const li = document.createElement('li');
            li.innerHTML = `
            ${item.nome} - R$ ${item.preco.toFixed(2)}
            <button onclick="removerDoCarrinho(${index})>X</button>"
            
            `;
            listaCarrinho.appendChild(li);

        });

        subtotalDisplay.textContent = soma.toFixed(2);
    }

