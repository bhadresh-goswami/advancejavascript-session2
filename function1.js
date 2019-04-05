var sum = function(a,b){
    return a+b;
};

console.log(`the sum of two integers is ${sum(22,33)}`);

//callback function
function askedQuestion(que,a,b)
{
    if(confirm(que))
    {
        //ok
        a();
    }
    else{
        b();
    }
}
function ok()
{
    console.log("you press ok for the question !");
}
function cancel()
{
    console.log("you cancel the question !");
}

askedQuestion("hi did you like the js?",ok,cancel);