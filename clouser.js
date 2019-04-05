//function with name
// function sum(a,b)
// {
//     alert(a+b);
// }
var a1 = 100;
//function without name
var sum = function(a,b)
{
    //code for sum function
    console.log(`the addition is ${a+b}`);

    return function()
    {
        //add the extra code into same
        if(a<0 || b<0)  
        console.log(`you may got the nagative output, ${a} Or ${b} is nagative!`);
    }
}

newFun = sum(-33,4);
newFun();