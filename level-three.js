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
         alert('Pooper! Your mind is reset. Go out to conquer the world 🤘🤘')
     } else if(score >= 10){
        score = 00;
        }
 }

 poopElement.addEventListener('click', levelOne)

 //Poop attach

 const toilet = document.getElementById('toilet3')
function image(){
    const img=document.createElement("img");
    img.src="images/poop3.png";
    img.id="mrpoop3";
    const poop = document.querySelector(".poop-toilet");
    poop.appendChild(img);
}
toilet.addEventListener('click', image)