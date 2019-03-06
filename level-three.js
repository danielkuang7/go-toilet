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
         alert('What a great pooper! Go out to conquer the world Champ 🤘🤘')
     }//  } else {
    //      alert('Get 100 then you can play level 2!')
    //  }
 }

 poopElement.addEventListener('click', levelOne)

 //Stick poop on toilet

 const toilet = document.getElementById('toilet3')
function image()
{
    //dynamically add an image and set its attribute
    const img=document.createElement("img");
    img.src="poop3.png";
    img.id="mrpoop3";
    const foo = document.querySelector(".poop-toilet");
    foo.appendChild(img);
}
toilet.addEventListener('click', image)