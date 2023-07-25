  const cells = document.querySelectorAll(".cell")
const statusText = document.querySelector("#statusText")
const restBtn =document.querySelector("#btn")

const winCondition =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let options = [
"", "", "",
"", "", "",
"", "", ""];
let currentPlayer ="X"
let running = false

initializeGame()
function initializeGame(){
   
    cells.forEach((cell)=>cell.addEventListener("click",clickCell))
    restBtn.addEventListener("click",reset);
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true;
    
}
function clickCell(){
    const cellIndex = this.getAttribute("cellindex")
    if(options[cellIndex] != "" || !running){
        return;
    }
    updateCell(this, cellIndex);
    checkWinner();
}
function updateCell(cell,index){
    options[index]= currentPlayer
    cell.textContent= currentPlayer
}

function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s turn`;
}
function checkWinner() {
    let roundWon =false
    for(let i = 0 ;i<winCondition.length;i++){
        const condition = winCondition[i]
        const cellA =options[condition[0]]
        const cellB =options[condition[1]]
        const cellC =options[condition[2]]
        if(cellA ==""||cellB ==""||cellC==""){
            continue
        }
        if(cellA ==cellB && cellB==cellC){
            roundWon = true
          break
            
        }
   }
   if(roundWon){
    statusText.textContent = `${currentPlayer}'s Won`;
    running =false
   }
   else if(!options.includes("")){
    statusText.textContent = `Draws`;
    running =false
   }else{
    changePlayer()
   }
} 

function reset(){
currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
}

