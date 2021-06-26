document.querySelector(".main").addEventListener("click",clc);
let leftcounter=16, occupiedcounter=0;
document.getElementById("demo").innerHTML=leftcounter;
document.getElementById("lelo").innerText=occupiedcounter;
function clc(e)
{
    var val=e.target.className;    
    if(val == "clicked"){        
        leftcounter= leftcounter + 1;
        occupiedcounter= occupiedcounter-1;
        e.target.classList= "unclicked";
    }
    if(val == "unclicked"){
        leftcounter =leftcounter-1;
        occupiedcounter =occupiedcounter + 1;
        e.target.classList= "clicked";
    }
    document.getElementById("demo").innerHTML=leftcounter;
    document.getElementById("lelo").innerText=occupiedcounter;
}