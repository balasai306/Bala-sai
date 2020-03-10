var queen = {
    direction: "s",
    position: {
        x: 0,
        y: 4
    }
}

var direction = prompt("Please enter the direction", "s");
var steps = prompt("Please enter number of steps to move", 0);
var temp=queen;
console.log("the position is" + positionlog())
change_position(direction,steps);

if(queen.position.x<0 || queen.position.x >7 || queen.position.y<0 || queen.position.y>7){
  queen=temp;
  console.log("invalid move");
 
}
else
  {
   console.log("the position is" + positionlog()) 
  }

function change_position(direction, steps) 
{
    switch (direction) 
    {
        case "s":
           queen.position.x = queen.position.x + steps;
            break;
        case "n":
            queen.position.x = queen.position.x - steps;
            break;
        case "e":
            queen.position.y = queen.position.y + steps;
             break;
        case "w":
            queen.position.y = queen.position.y - steps;
             break;
        case "ne":
            queen.position.x = queen.position.x - steps;
            queen.position.y = queen.position.y + steps;
             break;
        case "nw":
            queen.position.x = queen.position.x - steps;
            queen.position.y = queen.position.y - steps;
             break;
        case "se":
            queen.position.x = queen.position.x + steps;
            queen.position.y = queen.position.y + steps;
             break;
        case "sw":
            queen.position.x = queen.position.x + steps;
            queen.position.y = queen.position.y - steps;
             break;
    }
  
}

function positionlog() 
{
    var pos = [queen.position.x, queen.position.y];
    return pos;
}


