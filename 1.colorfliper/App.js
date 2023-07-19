const colors =['green',"red","rgba(133,122,200)","#f15025"]
const body =document.querySelector("body")
const btn =document.querySelector('#btn')
const color = document.querySelector(".color")
const header = document.querySelector("h2")

colors.forEach(color => {
    
});

btn.addEventListener('click',function(){
    
    // get random num between 0-3
    
   const randColor = rgbGen()
   
    body.style.backgroundColor = randColor;
    header.style.color = randColor;
    color.style.color = randColor;
    color.textContent = randColor    
})


function getRandomColor() {
    return  Math.floor(Math.random()*3)
}

function rgbGen(){
    const r = Math.floor(Math.random()*255)
    const g = Math.floor(Math.random()*255)
    const b = Math.floor(Math.random()*255)
    if(r < 150&& g<150 && b<150 ){
        color.style.color = 'white'
        console.log(r+g+b)
       }else color.style.color = 'black'
    return `rgb(${r},${g},${b})`
}