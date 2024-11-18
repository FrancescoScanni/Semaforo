
let start=new Date()
let click=new Date()


let avvio=document.querySelector("#b1")
let stop=document.querySelector("#b2")


let light1=document.querySelector("#light1")


//light1.classList.add(inserire il curret)
//spegnere il current
//accendere un altra luce






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
       // prendi il primo elemento con classe light e gli assegni current
    }, casualNumber*1000)

  })




stop.addEventListener("click", function() {
    alert('Hai cliccato il pulsante!');
  }) 

