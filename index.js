let board = [[document.getElementById("elem1"), document.getElementById("elem2"), document.getElementById("elem3")], [document.getElementById("elem4"), document.getElementById("elem5"), document.getElementById("elem6")], [document.getElementById("elem7"), document.getElementById("elem8"), document.getElementById("elem9")]]

var xTurn = true
var oTurn = false

var xScore = 0
var oScore = 0

function turn(id){
    if(checkWin() == 'empty'){
        if(xTurn == true){
            document.getElementById(id).innerHTML = 'X'
            document.getElementById(id).tagName ='x'
            xTurn = false
            oTurn = true
        }else{
            document.getElementById(id).innerHTML = 'O'
            document.getElementById(id).tagName ='o'
            oTurn = false
            xTurn = true
        }
    }

    
    if(checkWin() == 'x'){
        xScore++
    }
    else if(checkWin() == 'o')
    {
        oScore++
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

function reset(){
    for(var i = 0; i < board.length; i++){
        for(var j = 0; j < board[i].length; j++){
            board[i][j].tagName = 'empty'
       }
    }

    var cells = document.getElementsByClassName("cell")
    for(var k = 0; k < cells.length; k++){
        cells[k].innerHTML = ''
    }
}