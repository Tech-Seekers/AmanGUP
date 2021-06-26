document.querySelector(".main").addEventListener("click",clc);
function clc(e)
{
    var val=e.target.className;
    if(val == "clicked"){
        e.target.classList= "unclicked";
    }
    if(val == "unclicked"){
        e.target.classList= "clicked";
    }
}
