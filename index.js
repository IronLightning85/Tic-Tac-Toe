let board = [[document.getElementById("elem1"), document.getElementById("elem2"), document.getElementById("elem3")], [document.getElementById("elem4"), document.getElementById("elem5"), document.getElementById("elem6")], [document.getElementById("elem7"), document.getElementById("elem8"), document.getElementById("elem9")]]

var xTurn = true

var xScore = 0
var oScore = 0

function turn(id){
    if(checkWin() == ''){
        if(xTurn == true){
            if(document.getElementById(id).innerHTML == "")
            {
                document.getElementById(id).innerHTML = 'X'
                xTurn = false
            }
        }

        else
        {
            if(document.getElementById(id).innerHTML == "")
            {
                document.getElementById(id).innerHTML = 'O'
                xTurn = true
            }
            
        }
    }

    
    if(checkWin() == 'x'){
        xScore++
    }
    else if(checkWin() == 'o')
    {
        oScore++
    }

    //call function to check if all squares r full
    //if they are, call reset function
}


function checkWin()
{
    winner = "";
    //check horizontals
    if(board[0][0].innerHTML == board[0][1].innerHTML && board[0][1].innerHTML == board[0][2].innerHTML)
    {
        winner = board[0][0].innerHTML;
    }
    else if(board[1][0].innerHTML == board[1][1].innerHTML && board[1][1].innerHTML == board[1][2].innerHTML)
    {
        winner = board[1][0].innerHTML;
    }
    else if (board[2][0].innerHTML == board[2][1].innerHTML && board[2][1].innerHTML == board[2][2].innerHTML)
    {
        winner = board[2][0].innerHTML;
    }

    //check veticals
    else if(board[0][0].innerHTML == board[1][0].innerHTML && board[1][0].innerHTML == board[2][0].innerHTML)
    {
        winner = board[0][0].innerHTML;
    }
    else if(board[0][1].innerHTML == board[1][1].innerHTML && board[1][1].innerHTML == board[2][1].innerHTML)
    {
        winner = board[0][1].innerHTML;
    }
    else if (board[0][2].innerHTML == board[1][2].innerHTML && board[1][2].innerHTML == board[2][2].innerHTML)
    {
        winner = board[0][2].innerHTML;
    }

    //check horizontals
    else if(board[0][0].innerHTML == board[1][1].innerHTML && board[1][1].innerHTML == board[2][2].innerHTML)
    {
        winner = board[0][0].innerHTML;
    }
    else if(board[2][0].innerHTML == board[1][1].innerHTML && board[1][1].innerHTML == board[0][2].innerHTML)
    {
        winner = board[2][0].innerHTML;
    }

    return winner;
}

function reset(){
    var cells = document.getElementsByClassName("cell")
    for(var k = 0; k < cells.length; k++){
        cells[k].innerHTML = ''
    }
}


//implelement function to check if all squares r used