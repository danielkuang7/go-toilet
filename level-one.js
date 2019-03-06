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
         alert('Congrats! Try level 2!')
     } 
 }

 toiletElement.addEventListener('click', levelOne)

 //Stick poop on toilet

const toilet = document.getElementById('toilet1')
function image()
{

    const img=document.createElement("img");
    img.src="poop1.png";
    img.id="mrpoop";
    const foo = document.querySelector(".poop-toilet");
    foo.appendChild(img);
}
toilet.addEventListener('click', image)
