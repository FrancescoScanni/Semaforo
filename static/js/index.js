

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


function classifica(millis){
  risultati = risultati.sort((a, b) => a-b)  //funzione di confronto che sevre per ordinare un array
  document.querySelector('#primo').innerHTML = risultati[0]+ " ms"
  document.querySelector('#secondo').innerHTML = risultati[1]+ " ms"
  document.querySelector('#terzo').innerHTML = risultati[2]+ " ms"
  document.querySelector('#quarto').innerHTML = risultati[3]+ " ms"
  document.querySelector('#ultimo').innerHTML = millis + " ms"

}


function intermittenza(){
  light1.classList.add('red')
  setTimeout(function(){
      light2.classList.remove('luce')
      light2.classList.remove('.light2')
      light2.classList.add('yellow')
    }, 1000)
    casualNumber=generateRandomInteger(3,6)    //generiamo il numero random dopo così da avere il verde sicuramente dopo il giallo

    setTimeout(function(){
      document.querySelector('#clicca').innerHTML ="CLICCA!!!"
      stop.addEventListener("click",stoppa)
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


function stoppa(){
  document.querySelector('#clicca').innerHTML ="Controlla gli score"
  console.log('Hai cliccato il pulsante!')  //debug
  click=new Date()
  let score = click.getTime()-start.getTime()
  let millis = Math.floor(score * 100) / 100

  risultati.push(millis)  //inserimento vettore

  resetluci()
  classifica(millis)
  stop.removeEventListener("click",stoppa)
}


//MAIN

avvio.addEventListener("click", function() {
  document.querySelector('#clicca').innerHTML ="Attendi il verde..."
    light1.classList.remove('luce')
    console.log('Hai cliccato il pulsante!');  //debug
    intermittenza()
    })
    


  


    

    
    

    
  

  