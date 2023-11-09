let board = [[document.body.getElementById("elem1"), document.body.getElementById("elem2"), document.body.getElementById("elem3")][document.body.getElementById("elem4"), document.body.getElementById("elem5"), document.body.getElementById("elem6")][document.body.getElementById("elem7"), document.body.getElementById("elem8"), document.body.getElementById("elem9")]]

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


function checkWin()
{
    winner = "empty";
    //check horizontals
    if(board[0][0].tagName == board[0][1].tagName && board[0][1].tagName == board[0][2].tagName)
    {
        winner = board[0][0].tagName;
    }
    else if(board[1][0].tagName == board[1][1].tagName && board[1][1].tagName == board[1][2].tagName)
    {
        winner = board[1][0].tagName;
    }
    else if (board[2][0].tagName == board[2][1].tagName && board[2][1].tagName == board[2][2].tagName)
    {
        winner = board[2][0].tagName;
    }

    //check veticals
    else if(board[0][0].tagName == board[1][0].tagName && board[1][0].tagName == board[2][0].tagName)
    {
        winner = board[0][0].tagName;
    }
    else if(board[0][1].tagName == board[1][1].tagName && board[1][1].tagName == board[2][1].tagName)
    {
        winner = board[0][1].tagName;
    }
    else if (board[0][2].tagName == board[1][2].tagName && board[1][2].tagName == board[2][2].tagName)
    {
        winner = board[0][2].tagName;
    }

    //check horizontals
    else if(board[0][0].tagName == board[1][1].tagName && board[1][1].tagName == board[2][2].tagName)
    {
        winner = board[0][0].tagName;
    }
    else if(board[2][0].tagName == board[1][1].tagName && board[1][1].tagName == board[0][2].tagName)
    {
        winner = board[2][0].tagName;
    }

    return winner;
}