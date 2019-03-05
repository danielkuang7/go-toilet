/*
 * POOP: Level One
 *
 */

let score = 0

const ballElement = document.querySelector('.js-ball')

const scoreElement = document.querySelector('.js-score')

 const levelOne = function(){
    
     score +=10;
     scoreElement.innerText = score
     if(score == 100){
         alert('Congrats! Try level 2!')
     }//  } else {
    //      alert('Get 100 then you can play level 2!')
    //  }
 }

 ballElement.addEventListener('click', levelOne)
