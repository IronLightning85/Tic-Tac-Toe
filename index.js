var xTurn = true
var oTurn = false

function turn(){
    while(checkWin() != 'x' || checkWin() != 'o'){
        if(xTurn == true){
            xTurn = false
            oTurn = true
        }else{
            oTurn = false
            xTurn = true
        }
    }
}