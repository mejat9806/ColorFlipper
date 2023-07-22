
const input =document.querySelector("#text")
/* const spanX =document.querySelector("#XBTN")
 */
 const listContainer =document.querySelector("#listcontainer")
 let ul = document.querySelector("ul")
   function addList(){
        if(input.value === "" ){
            alert("please input something")
             
        }else{
        let createLi = document.createElement("li")
        createLi.textContent = input.value
        let xbtn = document.createElement("span")
        xbtn.innerHTML ="\u00d7"
        createLi.appendChild(xbtn)
        ul.appendChild(createLi)
       
        } 
    
    }   
    const addBtn=document.querySelector("#subBtn")
    addBtn.addEventListener("click",addList)
 
     
 listContainer.addEventListener("click",function(e){
   if(e.target.tagName ==="LI"){
    e.target.createList.add("deleleTodo")
   }else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove()
   }
   
 })