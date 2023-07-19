const hex =[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F",]
const body =document.querySelector("body")
const btn =document.querySelector('#btn')
const color = document.querySelector(".color")
const header = document.querySelector("h2")

// #f15025


btn.addEventListener('click',function(){
    let hexColor ="#"
    
    for(let i =0 ;i < 6;i++){

        hexColor += hex[getHex()]
    }
    body.style.backgroundColor = hexColor;
    header.style.color = hexColor;
    color.style.color = hex;
    color.textContent = hexColor  
});
  
   
    
function getHex (){
    return  Math.floor(Math.random()*hex.length)
}
