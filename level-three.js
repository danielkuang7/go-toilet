/*
 * POOP: Level One
 *
 */

let score = 0

const poopElement = document.querySelector('.poop-toilet')

const scoreElement = document.querySelector('.poop-score')

 const levelOne = function(){
    
     score +=10;
     scoreElement.innerText = score
     if(score == 100){
         alert('Congrats! Try level 2!')
     }//  } else {
    //      alert('Get 100 then you can play level 2!')
    //  }
 }

 poopElement.addEventListener('click', levelOne)

 //Stick poop on toilet