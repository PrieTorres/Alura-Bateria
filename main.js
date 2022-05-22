function tocaSom(id){
   let audios = document.querySelectorAll('audio');
   for (let index = 0; index < audios.length; index++) {
       audios[index].pause();
       audios[index].currentTime = 0;
   }
   document.querySelector(`#som_${id}`).play();
}

const listaDeTeclas = document.body.querySelectorAll('.tecla');

for (const i in listaDeTeclas) {
   listaDeTeclas[i].onclick = function(){ 
      for (let a = 0;a < listaDeTeclas.length; a++) {
         listaDeTeclas[a].classList.remove('ativa')
      }

       listaDeTeclas[i].classList.add('ativa')
       tocaSom(listaDeTeclas[i].classList[1]);
       
   }
}

window.addEventListener('keydown', e => {
   switch (e.key) {
      case '7':
         listaDeTeclas[0].click();
         break;
      
      case '8':
         listaDeTeclas[1].click();
         break;
      
      case '9':
         listaDeTeclas[2].click();
         break;

      case '4':
         listaDeTeclas[3].click();
         break;
      
      case '5':
         listaDeTeclas[4].click();
         break;

      case '6':
         listaDeTeclas[5].click();
         break;

      case '1':
         listaDeTeclas[6].click();
         break;

      case '2':
         listaDeTeclas[7].click();
         break;

      case '3':
         listaDeTeclas[8].click();
         break;
   
      default:
         break;
   }
})