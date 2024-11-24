

let start=0
let click=0

let avvio=document.querySelector("#b1")
let stop=document.querySelector("#b2")


let light1=document.querySelector('.light1')
let light2=document.querySelector('.light2')
let light3=document.querySelector('.light3')

let risultati=[]



light1.classList.add('luce')
light2.classList.add('luce')
light3.classList.add('luce')


//FUNZONI

function generateRandomInteger(min,max){   
    casualNumber = Math.random() * (max - min + 1) + min
    casualNumber=parseInt(casualNumber)
    return casualNumber
}



function classifica(){
  document.querySelector('#primo').innerHTML = risultati[0]+ " millisecondi"
  document.querySelector('#secondo').innerHTML = risultati[1]+ " millisecondi"
  document.querySelector('#terzo').innerHTML = risultati[2]+ " millisecondi"
  document.querySelector('#quarto').innerHTML = risultati[3]+ " millisecondi"

}



function intermittenza(){
  light1.classList.add('red')
  setTimeout(function(){
      light2.classList.remove('luce')
      light2.classList.remove('.light2')
      light2.classList.add('yellow')
    }, 1000)
    casualNumber=generateRandomInteger(3,10)    //generiamo il numero random dopo così da avere il verde sicuramente dopo il giallo
    console.log(casualNumber)
    setTimeout(function(){
      light3.classList.remove('luce')
      light3.classList.add('green')
      start=new Date()
    }, casualNumber*1000)
}



function resetluci(){
  light1.classList.remove('red')
  light2.classList.remove('yellow')
  light3.classList.remove('green')
  light1.classList.add('luce')
  light2.classList.add('luce')
  light3.classList.add('luce')
}




//MAIN

avvio.addEventListener("click", function() {
    light1.classList.remove('luce')
    console.log('Hai cliccato il pulsante!');

    intermittenza()
    })
    

stop.addEventListener("click", function() {
    console.log('Hai cliccato il pulsante!')
    click=new Date()
    let score = click.getTime()-start.getTime()
    let millis = Math.floor(score * 100) / 100

    risultati.push(millis)
    risultati=risultati.sort()

    for (let i=0;i<risultati.length;i++){
      console.log(risultati[i])
    }
    console.log(risultati)
    console.log(millis)   //secondi

    resetluci()
    classifica()
    

    
  }) 

