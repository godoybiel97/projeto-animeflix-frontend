var listaFilmes = [
  'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/01ec367b44f0a568430a957e042639af.jpe',
  'https://animesbr.biz/wp-content/uploads/2019/07/phuYuzqWW9ru8EA3HVjE9W2Rr3M.jpg',
  'https://sm.ign.com/ign_br/tv/f/fullmetal-/fullmetal-alchemist-brotherhood-1_qzyx.jpg',
  'https://img.manchete.org/supercampeos_2002_prime_banner-1.jpg',
  'https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/9daa2f17d7ad2727d72fdeaae6e232de.jpe',
];

var nomeFilmes = [
  'Naruto Shippuden',
  'My Hero Academy',
  'Fullmetal Alchemist',
  'Super Campeões',
  'Attack on Titan',
];

document.write('<div class="container_todosFilmes">');

for (var i = 0; i < listaFilmes.length; i++) {
  if (listaFilmes[i]) {
    document.write('<div class="container_filme">');
    document.write('<img src=' + listaFilmes[i] + ' >');
    document.write('<p>' + nomeFilmes[i] + '</p>');
    document.write('</div>');
  }
}
document.write('</div>');

// var nomeFilmes = ['Capitão Fantástico', 'Kill Bill 1', 'Estrelas além do tempo', 'O grande hotel Budapeste', 'La La Land', 'As pontes de Madison', 'Soul', 'Bastardos Inglórios', 'A viagem de Chihiro', 'Amsterdam', 'Divertidamente', 'Harry Potter e a Câmara Secreta'];

// document.write('<div class="container_todosFilmes">')
// //desafio 1 - transformar for em while
// var i = 0;
// while(i < listaFilmes.length){
//     if((listaFilmes[i].endsWith('jpg')) || (listaFilmes[i].endsWith('jpeg'))){
//         document.write('<div class="container_filme">')
//         document.write('<img src='+ listaFilmes[i] +'>');
//         document.write('<p>'+ nomeFilmes[i] +'</p>'); //desafio 4 - colocar titulos embaixo da imagem
//         document.write('</div>')
//     }else{
//         document.write('<p> A imagem ' + i + ' não foi lida pois não é um arquivo do tipo jpeg ou jpg </p>');
//     }
//     i++;
// }
// document.write('</div>')
