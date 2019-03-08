/*
 * POOP: Level One
 *
 */

let score = 0

const poopElement = document.querySelector('.poop-toilet')

const scoreElement = document.querySelector('.poop-score')

 const levelOne = function(){
    
     score +=1;
     scoreElement.innerText = score
     if(score == 10){
         alert('So creepy!! Move on to level three to stress out more poop poop!😱')
     } else if(score >= 10){
        score = 00;
        }
 }

 poopElement.addEventListener('click', levelOne)

 //Poop attach

 const toilet = document.getElementById('toilet2')
function image(){
    const img=document.createElement("img");
    img.src="images/poop2.png";
    img.id="mrpoop2";
    const poop = document.querySelector(".poop-toilet");
    poop.appendChild(img);
}
toilet.addEventListener('click', image)