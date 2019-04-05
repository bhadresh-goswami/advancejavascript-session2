

function SayHello(name,text,newpara)
{
    if(newpara==undefined)
    {
        console.log(`not added the newpara!`);
    }
    console.log(`my name is ${name}, hello to all, ${text}`);
}

setTimeout(SayHello,5000,"bhadresh","this is about me!");//,"new para text");
