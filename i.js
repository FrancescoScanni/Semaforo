

let start=0
let click=0

let avvio=document.querySelector("#b1")
let stop=document.querySelector("#b2")


let light1=document.querySelector('.light1')
let light2=document.querySelector('.light2')
let light3=document.querySelector('.light3')

let risultati=[]



function generateRandomInteger(min,max){   
    casualNumber = Math.random() * (max - min + 1) + min

    casualNumber=parseInt(casualNumber)
    return casualNumber
}


avvio.addEventListener("click", function() {
    console.log('Hai cliccato il pulsante!');
    light1.classList.add('red')


    setTimeout(function(){
      light2.classList.remove('.light2')
      light2.classList.add('yellow')
    }, 1000)


    casualNumber=generateRandomInteger(3,10)    //generiamo il numero random dopo così da avere il verde sicuramente dopo il giallo
    console.log(casualNumber)

    setTimeout(function(){
      light3.classList.add('green')
      start=new Date()
    }, casualNumber*1000)
    

    })
    




    
stop.addEventListener("click", function() {
    console.log('Hai cliccato il pulsante!')
    click=new Date()
    let score = click.getTime()-start.getTime()
    let millis = score/1000

    risultati.push(score)
    risultati.sort()
    console.log(millis)   //secondi

    
  }) 

function classifica(score){

}