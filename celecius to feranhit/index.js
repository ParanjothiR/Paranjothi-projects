
function conversionOf(){
    var k=0;
    if(document.getElementById("conversion").checked==true){
          k=1;
    }else if(document.getElementById("conversion1").checked==true){
          k=2;
    }else{
        k=0;
        alert("You are not chose the conversion")
        return false;
    }
    var val=document.getElementById("val").value;
    if(val==""){
        alert("you enter the value");
        return false;
    }
    if(k==2){
        let fer=(val*(9/5))+32;
        document.getElementById("result").innerHTML=fer.toFixed(2)+" "+"degrees Fahrenheit."
    }else if(k==1){
        let cel=(5/9)*(val-32);
        document.getElementById("result").innerHTML=cel.toFixed(2)+" "+"degrees Celsius."

    }
    
    
}