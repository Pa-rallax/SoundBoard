var drumNumbers = document.querySelectorAll(".butt").length
for(var i = 0; i<drumNumbers; i++){
var clickedButton = document.querySelectorAll(".butt")[i]
clickedButton.addEventListener("click", buttonForAll)
//function for button clicked
function buttonForAll(){
   this.style.color="white"
   this.style.border = "5px solid red"
   this.classList.add("em")
   this.style.textShadow = "5px 0 black"
}
}
//button 1
document.querySelector(".hey").addEventListener("click", buttonClick)
function buttonClick(){
    var audio = new Audio('Hey.mp3')
    audio.play()
}
//button 2
document.querySelector(".hi").addEventListener("click", buttonClick1)
function buttonClick1(){
    var audio = new Audio('Hi.mp3')
    audio.play()
    
}
//button 3
document.querySelector(".hello").addEventListener("click", buttonClick2)
function buttonClick2(){
    var audio = new Audio('Hello.mp3')
    audio.play()
} 
//button 4
document.querySelector(".yo").addEventListener("click", buttonClick3)
function buttonClick3(){
    var audio = new Audio('Yo.mp3')
    audio.play()
}
//button 5
document.querySelector(".chief").addEventListener("click", buttonClick4)
function buttonClick4(){
    var audio = new Audio('Chief.mp3')
    audio.play()
}





//Extras//
// var audio = new Audio('test.3gpp.mp3')
// audio.play;
// alert ("my name is")
// alert(drumNumbers);
   // var audio = new Audio('sounds/tom-1.mp3')
