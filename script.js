const imagem1 = document.querySelector('#img1');
const nomeDoPersonagem1 = document.querySelector('#nome1');
const especie1 = document.querySelector('#especie1');
const condicao1 = document.querySelector('#condicao1');
const imagem2 = document.querySelector('#img2');
const nomeDoPersonagem2 = document.querySelector('#nome2');
const especie2 = document.querySelector('#especie2');
const condicao2 = document.querySelector('#condicao2');
const imagem3 = document.querySelector('#img3');
const nomeDoPersonagem3 = document.querySelector('#nome3');
const especie3 = document.querySelector('#especie3');
const condicao3 = document.querySelector('#condicao3');
const botao = document.querySelector('#botao');

document.getElementById('botao').addEventListener('click', function(){
    pegarPersonagem1();
    pegarPersonagem2();
    pegarPersonagem3();
    topFunction();
})

function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}

traduzirCondicao = (data) => {
    if(data.status == 'Alive'){
        return 'Está vivo!';
    }else if(data.status == 'Dead'){
        return 'Está morto!';
    }else{
        return 'Não se sabe.';
    }
}

gerarValorAletorio = () => {
    return Math.floor(Math.random() * 826);
}

pegarPersonagem1 = () => {
    let numeroAleatorio = gerarValorAletorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem1.src = data.image;
        imagem1.alt = data.name;
        nomeDoPersonagem1.innerHTML = data.name;
        especie1.innerHTML = data.species;
        condicao1.innerHTML = traduzirCondicao(data);
    });
}

pegarPersonagem2 = () => {
    let numeroAleatorio = gerarValorAletorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem2.src = data.image;
        imagem2.alt = data.name;
        nomeDoPersonagem2.innerHTML = data.name;
        especie2.innerHTML = data.species;
        condicao2.innerHTML = traduzirCondicao(data);
    });
}
