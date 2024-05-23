let boxes = document.querySelectorAll(".box");
let restbt = document.querySelector("#set")
let newgamebtn = document.querySelector("#new-game");
let msgcontain = document.querySelector(".msg-cont ");
let msgpara = document.querySelector("#winmsg")

let turn0 = true; // playerX , player0 


// 2D array 
// let arr2  = [["apple","litchi"],["potato " ,"mushroom"],["paints" , "shirts"]]


const winPatterns  = [[0,1,2],
                    [3,4,5],
                    [6,7,8],
                    [0,3,6],
                    [1,4,7],
                    [2,5,8],
                    [0,4,8],
                    [2,4,6]

] 

boxes.forEach((box) => {
    box.addEventListener("click" , () =>{
        console.log("box was clicked");
       if(turn0 ){
        box.innerText = "0";
        box.style.color ="Blue";
        turn0 =false;
       }else{
        box.innerText = "X"
        box.style.color = "red"
        turn0=true;
       }
       box.disabled = true;  // after click one time no one can change it
      checkWinner();


    });
});
const disabledboses=()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        // msgcontain.classList.add("hide")
    }
}

const showWinner=(winner)=>{
    msgpara.innerText = `Congratulations! Winner is ${winner}`;
    msgcontain.classList.remove("hide")
    disabledboses();
}

const checkWinner=()=>{
    for(pattern of winPatterns){
        // console.log(pattern[0] , pattern[1] , pattern[2])
       
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val!=""&& pos2Val!=""&& pos3Val !=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                // console.log("winner",pos1Val);
               showWinner(pos1Val)
            }
        }
    }
};

const resetGame=()=>{
    turn0 = true;
    enableBoxes();
    msgcontain.classList.add("hide")
}
newgamebtn.addEventListener("click" , resetGame);
restbt.addEventListener("click" , resetGame);
