let main = document.querySelector(".main");
let game = document.querySelector(".game");
let boxes = document.querySelectorAll(".box")
let winner = document.querySelector(".winner");
let reset = document.querySelector(".res");

let moveO = true;
let checkval = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];


boxes.forEach(function(box){
    box.addEventListener("click",function(){
        console.log("button was clicked");
        
        if(moveO)
        {
            box.innerText="O";
            moveO = false;
        } else
        {
            box.innerText = "X";
            moveO = true;
        }
        box.disabled = true;

        checkwinner();
    });
});

function done()
{
    moveO = true;
    enablebox();

}

function disabledbox()
{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}


function enablebox()
{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText=" "
    }
}

function showwinner()
{
    winner.innerHTML="You Won"
    disabledbox();
  
}
function checkwinner()
{
    for (let pattern of checkval )
    {
        console.log(pattern);

        console.log(pattern[0],pattern[1],pattern[2]);
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val !=""){
            if(pos1val ===pos2val && pos2val === pos3val)
            {
                console.log("winner",pos1val);
                showwinner();
                

               
            }

            
        }


    }

}
reset.addEventListener("click",function clear()
{
    done();
    winner.innerText=""
});







