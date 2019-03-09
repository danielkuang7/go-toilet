/*
 * POOP: Level Two
 *
 */

let shots = 0

const poopElement = document.querySelector('.poop-toilet')

const shotsElement = document.querySelector('.poop-shots')

 const levelOne = function(){
    
     shots +=1;
     shotsElement.innerText = shots
     if(shots == 10){
         alert('So creepy!! Move on to level three to stress out more poop poop!😱')
     } else if(shots >= 10){
        shots = 00;
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