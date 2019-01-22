document.addEventListener("DOMContentLoaded",function(){
console.log("main.js is linked succesfully")

for(var i = 0; i < 9; i++) {
    console.log($("#"+i)); //awesome jQuery syntax
    box = $("#"+i);
    box.click(eventHandler);
}

function eventHandler(event){
    if(isEmpty(event.target)) {
        console.log("ITS EMPTY!")
        event.target.innerText = player // set text
        console.log(event.target) 

        if(isWin()) {
            alert(player + " WON")
        }

        //change player sign
        togglePlayer();
    }
    else {
        alert("That box is taken. Choose again.")
    }    

}

var player = "X"

function togglePlayer() {
    if(player==="X")
        player = "O"
    else
        player = "X"
}

function isEmpty(evtTarget) {
    if(evtTarget.innerText === "")
        return true;
    else
        return false;
}

function isWin() {
    console.log("checking winner")
    boxes = document.querySelectorAll(".row div")

    //checking rows
    for(var r = 0; r <= 6; r+=3) { //three iterations
        if(( (boxes[r].innerText === boxes[r + 1].innerText) && (boxes[r + 1].innerText === boxes[r + 2].innerText) )
            && ((boxes[r].innerText !== "") && (boxes[r+1].innerText !== "") && (boxes[r+2].innerText !== ""))
        )
            return true;
    }
    
    //checking columns
    for(var c = 0; c <=2; c+=1) { //three iterations
        if(((boxes[c].innerText === boxes[c + 3].innerText) && (boxes[c + 3].innerText === boxes[c + 6].innerText))
        && ((boxes[c].innerText !== "") && (boxes[c + 3].innerText !== "") && (boxes[c + 6].innerText != "")))
            return true;
    }
    
    // //diagonal cases (2)
    // if(((boxes[0].innerText === boxes[4].innerText) && (boxes[4].innerText === boxes[8].innerText))
    // && ((boxes[0].innerText !== "") && (boxes[4].innerText !== "") && (boxes[6].innerText != "")))
    //     return true;

    // if(((boxes[2].innerText === boxes[4].innerText) && (boxes[4].innerText === boxes[6].innerText))
    // && ((boxes[2].innerText !== "") && (boxes[4].innerText !== "") && (boxes[6].innerText != "")))
    //     return true;

}

})