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
         alert('Your 10 shots are done! See how many poops you got! Move on to level two to poop more! 🤪')
     } 
 }

 toiletElement.addEventListener('click', levelOne)

 

// Loading bar


  //Stick poop on toilet

let toilet = document.getElementById('toilet1')
function image()
{

    let img=document.createElement("img");
    img.src="poop1.png";
    img.id="mrpoop1";
    let foo = document.querySelector(".poop-toilet");
    foo.appendChild(img);
}
toilet.addEventListener('click', image)