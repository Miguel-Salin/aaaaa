function fuja() {
    //capiturar o id 'nao' do html e coloca ele na variavel chamada 'botaoNao'
    // Largura desejada
    var larguraDesejada = 414; 
    // Altura desejada    
    var alturaDesejada = 896; 
    
    var larguraJanela = window.innerWidth;
    var alturaJanela = window.innerHeight;
    // Coordenadas máximas para o elemento

    var maxX = larguraJanela - larguraDesejada;
    var maxY = alturaJanela - alturaDesejada;

    var botaoNao = document.getElementById('nao');



    var maxX = larguraJanela - botaoNao.offsetWidth;
    var maxY = alturaJanela - botaoNao.offsetHeight;

    var aleatorioX = Math.floor(Math.random() *maxX);
    var aleatorioY = Math.floor(Math.random() *maxY);

    botaoNao.style.left = aleatorioX + "px";
    botaoNao.style.top = aleatorioY + "px";



}

function yipie(){
    alert ('Eba🎉, voce aceitou e Axel fixou muito feliz com a sua companhia 😄 ')
}