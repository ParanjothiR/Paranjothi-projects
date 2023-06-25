function count(){
    let word=document.getElementById("area1").value;
    let leng=word.length;
    var numword=0;
    for(var i=0;i<leng;i++){
        var currentcar=word[i];
        if(currentcar==" "){
              numword+=1;
        }
    }
    numword+=1;
    document.getElementById("result").innerHTML="Total no.of.words "+ numword 
    
}