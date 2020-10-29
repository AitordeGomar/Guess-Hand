 function start(){
 //Variables    
 let contador = 0;
 let bestScore = document.getElementById('bestScore');
 if(localStorage.getItem('best')){
     bestScore.innerText = localStorage.getItem('best').toString();
 }else{
     bestScore.innerText = "0";
 }
 let btnDelete = document.getElementById('btnDelete');
 let correctNum = Math.round((Math.random()));
 let textoContador = document.getElementById('contador');
 let suerte = document.getElementById('suerte');
 let resultado = document.getElementById('resultado');
 let face = document.getElementById('face');
 let h3 = document.getElementsByTagName('h3')[0];
 
     // Hand Pics
 let leftHand = document.getElementById('leftHand');
 let rightHand = document.getElementById('rightHand');
 let leftEmpty = ()=> leftHand.setAttribute('src','./images/leftEmpty.jpg');
 let leftFist = ()=> leftHand.setAttribute('src','./images/leftFist.jpg');
 let leftPrize = ()=> leftHand.setAttribute('src','./images/leftPrize.jpg');
 let rightEmpty = ()=> rightHand.setAttribute('src','./images/rightEmpty.jpg');
 let rightFist = ()=> rightHand.setAttribute('src','./images/rightFist.jpg');
 let rightPrize = ()=> rightHand.setAttribute('src','./images/rightPrize.jpg');

     //Face Pics
 let happyFace = ()=> face.setAttribute('src','./images/happyFace.jpg');
 let blinkFace = ()=> face.setAttribute('src','./images/blinkFace.jpg');
 let angryFace = ()=> face.setAttribute('src','./images/angryFace.jpg');


 function clickLeft(){
     suerte.classList.add('visible');
     suerte.classList.remove('hidden');

     if(Math.round((Math.random())) == correctNum){

         leftPrize();
         blinkFace();
         contador++;
         suerte.innerHTML = contador;
         correctNum = Math.round((Math.random()));
         setTimeout(function(){
             leftFist();
             happyFace();
         },3000);
     }
     else{
     leftEmpty();
         resultado.innerText = `Your score was: ${contador}`;
         if(parseInt(contador)>parseInt(bestScore.innerText)){
             localStorage.setItem('best', contador.toString());
             bestScore.innerText = localStorage.getItem('best').toString();
         }
         contador = 0;
         suerte.innerText = 'Sorry, not that one';
         angryFace();
         setTimeout(function(){
             leftFist();
             // textoContador.innerHTML = 'Start';
             suerte.innerText = '';
             suerte.classList.add('hidden');
             suerte.classList.remove('visible');
             happyFace();
         },2000);        
     }
 }

 function clickRight(){
     suerte.classList.add('visible');
     suerte.classList.remove('hidden');

     if(Math.round((Math.random())) == correctNum){

         rightPrize();
         contador++;
         suerte.innerHTML = contador;
         correctNum = Math.round((Math.random()));
         blinkFace();
         setTimeout(function(){
             rightFist();
             happyFace();
         },3000);
     }
     else{
         rightEmpty();
         resultado.innerText = `Your score was: ${contador}`;
         if(parseInt(contador)>parseInt(bestScore.innerText)){
             localStorage.setItem('best', contador.toString());
             bestScore.innerText = localStorage.getItem('best').toString();
         }
         contador = 0;
         suerte.innerText = 'Sorry, not that one';
         angryFace();
         
         setTimeout(function(){
             rightFist();
             suerte.innerText = '';
             suerte.classList.add('hidden');
             suerte.classList.remove('visible');
             happyFace();
         },2000);
     }
     
 }

 function begin(){
     suerte.classList.add('visible');
     suerte.classList.remove('hidden');
     suerte.innerText = 'Good Luck';
     textoContador.classList.add('hidden');
     resultado.innerText = '';
     leftEmpty();
     rightPrize();
     h3.classList.add('hidden');
     setTimeout(function(){
         suerte.innerText = '0';
         leftFist();
         rightFist();
         happyFace();
     },2000);
 }

 function clickDelete(){
     let confirmDelete =confirm('Are you sure you want to delete your best score?');
     if(confirmDelete){
         localStorage.removeItem('best');
         bestScore.innerText = "0";
     }else{
         null;
     }
 }


 leftHand.addEventListener('click',clickLeft,false);
 rightHand.addEventListener('click',clickRight,false);
 textoContador.addEventListener('click',begin, false);
 btnDelete.addEventListener('click', clickDelete, false);
    }