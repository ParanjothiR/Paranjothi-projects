var button=document.querySelector("button")

let resultdiv=document.createElement('div')
resultdiv.id='result'
document.getElementById("container").appendChild(resultdiv)
button.addEventListener('click',calculation);


function calculation(){
    var val=document.getElementById("inpute").value
    var op=0;
    var resultset=0;
    var operator=''
    if(val.includes('+')){
         op=1;
         operator='+'

    }else if(val.includes('-')){
        op=2;
        operator='-'
    }else if(val.includes('*')){
        op=3;
        operator='*'
    }else if(val.includes('/')){
        op=4
        operator='/'
    }else{
        op=5;
    }
   // var resultset=0;
    var karray=val.split(operator)
    const a=Number(karray[0])
    const b=Number(karray[1])
    switch (op) {
        case 1:
            resultset=a+b;
            break;
        case 2:
            resultset=a-b;
            break;
        case 3:
            resultset=a*b;
            break;
        case 4:
            resultset=a/b;
            resultset=resultset.toFixed(3)
            break;
        default:
            break;
    }
    document.getElementById("result").innerHTML="Value:"+resultset

}