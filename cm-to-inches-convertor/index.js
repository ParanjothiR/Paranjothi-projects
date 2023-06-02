function msg(){
let cmvalu=document.getElementById("input1").value;
let inche=cmvalu/2.54;
document.getElementById("result").innerHTML=inche.toFixed(2)+" inches";
}