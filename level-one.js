/*
 * POOP: Level One
 *
 */

//Set 10 shots for player to play

let shots = 0

const toiletElement = document.querySelector('.poop-toilet')

const shotsElement = document.querySelector('.poop-shots')

 function levelOne(){
    
     shots +=1;
     shotsElement.innerText = shots
     if(shots == 10){
         alert('Your 10 shots are out! You need to have at least 5 poops to win the game. See how many poops you got! Click on the level two to poop more! 🤪')
     } else if(shots >= 10){
     shots = 00;
     }
 }

 toiletElement.addEventListener('click', levelOne)

 // 

 const nextLevel = function(){
    if(shots == 10){
        let changeLevel = document.getElementById('#leveltwo')
        return changeLevel;
    }
}

  //Poop shows up once the player shots the right toilet

const toilet = document.getElementById('toilet1')
function image(){

    let img=document.createElement("img")
    img.src="images/poop1.png"
    img.id="mrpoop1"
    let poop = document.querySelector(".poop-toilet")
    poop.appendChild(img)
}
toilet.addEventListener('click', image)