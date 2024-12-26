const button = document.querySelectorAll(`.button`);
const body = document.querySelector(`body`)

button.forEach(function(button){
    console.log(button);
    button.addEventListener(`click`,function(color){
        console.log(color.target);
        if(color.target.id === `grey`){
            body.style.backgroundColor = color.target.id;
        }
        if(color.target.id === `white`){
            body.style.backgroundColor = color.target.id;
        }
        if(color.target.id === `blue`){
            body.style.backgroundColor = color.target.id;
        }
        if(color.target.id === `yellow`){
            body.style.backgroundColor = color.target.id;
        }
        if(color.target.id === `orange`){
            body.style.backgroundColor = color.target.id;
        }

      
       
    })
})

