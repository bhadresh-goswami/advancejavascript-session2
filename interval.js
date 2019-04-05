
var i = 0;
function f1()
{
    i++;
    console.log("tick "+i);
    if(i>10)
    {
        clearInterval(timerId)
    }
}
var timerId = setInterval(f1,500);//it repeate the function f1 for each half sec


