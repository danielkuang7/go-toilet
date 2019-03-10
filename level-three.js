/*
 * POOP: Level Three
 *
 */

 //Set 20 shots for player to play

let shots = 0

const poopElement = document.querySelector('.poop-toilet')

const shotsElement = document.querySelector('.poop-shots')

 function levelThree(){
    
     shots +=1;
     shotsElement.innerText = shots
     if(shots == 20){
         alert('Pooper! Your mind is reset. Go out to conquer the world 🤘🤘')
     } else if(shots >= 20){
        shots = 00;
        }
 }

 poopElement.addEventListener('click', levelThree)

 //Poop shows up once the player shots the right toilet

const toilet = document.getElementById('toilet3')
function image(){
    const img=document.createElement("img")
    img.src="images/poop3.png"
    img.id="mrpoop3"
    const poop = document.querySelector(".poop-toilet")
    poop.appendChild(img)
}
toilet.addEventListener('click', image)