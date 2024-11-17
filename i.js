
let start=new Date()
let click=new Date()


let avvio=document.querySelector("#b1")
let stop=document.querySelector("#b2")

let red=document.querySelector(".l1")

/*
let lyellow=document.querySelector("lyellow")
let lgreen=document.querySelector("lgreen")
*/

function generateRandomInteger(min,max){   
    casualNumber = Math.random()
    casualNumber = casualNumber * max + casualNumber  
    casualNumber=parseInt(casualNumber)
    return casualNumber
}
casualNumber=generateRandomInteger(0,5)
console.log(casualNumber)





avvio.addEventListener("click", function() {
    console.log('Hai cliccato il pulsante!');

    
    setTimeout(function(){
        
       console.log("ok")
    }, casualNumber*1000)
  })

  red.classList.add(".l1")




stop.addEventListener("click", function() {
    alert('Hai cliccato il pulsante!');
  }) 

