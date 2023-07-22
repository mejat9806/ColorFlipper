//set intial value
let count =0


const display =document.querySelector("#value")
const btns =document.querySelectorAll("#btn")
/* const btn_inc = document.querySelector("#btn-increase")
const btn_dec = document.querySelector("#btn-decrease")
const btn_reset = document.querySelector("#btn-reset")

btn_inc.addEventListener("click",(e)=>{
   console.log(e);
    display.textContent=++count
})
btn_dec.addEventListener("click",(e)=>{
   console.log(e);
    display.textContent=--count
})
btn_reset.addEventListener("click",(e)=>{
   console.log(e);
    display.textContent=0
}) */


btns.forEach(function(button){
button.addEventListener("click",function(e){
const styles =e.currentTarget.classList;
 if(styles.contains('decrease')){
    console.log(styles);
    count--
} 
else if(styles.contains('increase')){
    count++
}
else {
    count =0
 console.log(styles); 
}
    if(count>0){
        display.style.color="green"
    }else if(count<0){
        display.style.color="red"

    }else{
        display.style.color="rgba(129, 177, 177, 0.8)"
    }
       display.textContent=count
})
})