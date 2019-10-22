let banner = document.querySelector('.banner-destaque img');
let banners = [
    '/home/thais/Área de Trabalho/aneesa/resources/img/modelo_11.JPG',
    '/home/thais/Área de Trabalho/aneesa/resources/img/modelo10.JPG',
    '/home/thais/Área de Trabalho/aneesa/resources/img/modelo3.JPG',
];

let bannerAtual = 0;

function trocaBanner(){
    bannerAtual++;
    if(bannerAtual == banners.length){
        bannerAtual = 0;
    }
    banner.src = banners[bannerAtual];
}

//executa uma função a cada x milisegundos
setInterval(trocaBanner, 2000);