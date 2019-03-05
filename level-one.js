/*
 * POOP: Level One
 *
 */

let score = 0

const toiletElement = document.querySelector('.poop-toilet')

const scoreElement = document.querySelector('.poop-score')

 const levelOne = function(){
    
     score +=10;
     scoreElement.innerText = score
     if(score == 100){
         alert('Congrats! Try level 2!')
     }
 }

 toiletElement.addEventListener('click', levelOne)

 //Stick poop on toilet
//  const toilet = document.getElementById('toilet1')
//  const createPoop = function(){
//     document.getElementById('toilet1').src="poop1.png"; 
//  }
//  toilet.addEventListener('click', createPoop)


const toilet = document.getElementById('toilet1')
function image()
{
    //dynamically add an image and set its attribute
    const img=document.createElement("img");
    img.src="poop1.png";
    img.id="picture";
    const foo = document.querySelector(".poop-toilet");
    foo.appendChild(img);
}
toilet.addEventListener('click', image)