const keys = document.querySelectorAll(".key")
const keyPress =window.addEventListener("keydown",play)


function play(e){
    
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"`)
    
    if(!audio) return  //the function from running
    audio.currentTime =0 //rewind to start
    audio.play()
    key.classList.add("playing")
  
    console.log(e);
}
 keys.forEach(key=>{
    key.addEventListener("transitionend", removeTransi)
})



function removeTransi(e) {
   if(e.propertyName !== "transform")return
   this.classList.remove("playing")
}
