window.onload=function()
{
    let countersuc=0;
    let mysuccses=document.getElementById("p1")
    console.log(mysuccses)
    window.setInterval(function(){
        if (countersuc<500)
            {
                mysuccses.innerHTML=`${++countersuc} +`
            }
    },1)
    
    let counterwork=0;
    let myworking=document.getElementById("p2")
    console.log(myworking)
    window.setInterval(function(){
        if (counterwork < 17140)
            {
                myworking.innerHTML=`${++counterwork+1000} +`
            }
    },1)

    let counterhappy=0;
    let myhappy=document.getElementById("p3")
    console.log(myhappy)
    window.setInterval(function(){
        if (counterhappy<1500)
            {
                myhappy.innerHTML=`${++counterhappy} +`
            }
    },1)
}