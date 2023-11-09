let board = [[1,2,3][4,5,6][7,8,9]]//changes to html elements later

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
    if(elem1 == elem2 && elem2 == elem3)
    {
        winner = elem1.tagName;
    }
    else if(elem4 == elem5 && elem5 == elem6)
    {
        winner = elem4.tagName;
    }
    else if (elem7 == elem8 && elem8 == elem9)
    {
        winner = elem7.tagName;
    }

    //check veticals
    if(elem1 == elem4 && elem4 == elem7)
    {
        winner = elem1.tagName;
    }
    else if(elem2 == elem5 && elem5 == elem8)
    {
        winner = elem2.tagName;
    }
    else if (elem3 == elem6 && elem6 == elem9)
    {
        winner = elem3.tagName;
    }

    //check horizontals
    if(elem1 == elem5 && elem5 == elem9)
    {
        winner = elem1.tagName;
    }
    else if(elem7 == elem5 && elem5 == elem3)
    {
        winner = elem7.tagName;
    }

    return winner;
}