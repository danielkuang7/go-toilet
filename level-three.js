/*
 * POOP: Level Three
 *
 */

let shots = 0

const poopElement = document.querySelector('.poop-toilet')

const shotsElement = document.querySelector('.poop-shots')

 const levelOne = function(){
    
     shots +=1;
     shotsElement.innerText = shots
     if(shots == 10){
         alert('Pooper! Your mind is reset. Go out to conquer the world 🤘🤘')
     } else if(shots >= 10){
        shots = 00;
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