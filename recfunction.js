

function simplePow(x,n)
{
    var res = 1;
    for(var i = 0; i< n;i++)
    {
        res = res * x;//1*2*2*2
    }
    alert(res);
}

simplePow(2,3);

function recPow(x,n)
{
    if(n == 1){
        return x;
    }
    else{
        return x  * recPow(x,n-1);
    }
}

alert(`this is the output of rec ${recPow(2,3)}`);