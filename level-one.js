/*
 * POOP: Level One
 *
 */

let score = 0

const toiletElement = document.querySelector('.poop-toilet')

const scoreElement = document.querySelector('.poop-score')

 const levelOne = function(){
    
     score +=1;
     scoreElement.innerText = score
     if(score == 10){
         alert('Your 10 shots are out! Top pooper got more than 8 poops. See how many poops you got! Move on to the level two to poop more! 🤪')
     } else if(score >= 10){
     score = 00;
     }
 }

 toiletElement.addEventListener('click', levelOne)

 

// Loading bar


  //Stick poop on toilet

let toilet = document.getElementById('toilet1')
function image()
{

    let img=document.createElement("img");
    img.src="images/poop1.png";
    img.id="mrpoop1";
    let foo = document.querySelector(".poop-toilet");
    foo.appendChild(img);
}
toilet.addEventListener('click', image)