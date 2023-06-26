var button=document.querySelector("button");

let resultdiv=document.createElement('div')
resultdiv.id='result'
document.getElementById('container').appendChild(resultdiv)

//event listner

button.addEventListener('click',displayStats);

function displayStats(){
    //console.log("click");
    const input=document.getElementById("input")
   // console.log(input);
    let population=0,literacyRate=0,langauge="";

    const city=input.options[input.selectedIndex]
    //console.log(city.value);

    switch(city.value){
        case 'Bengaluru':
            population=8843675
            literacyRate=88.71
            langauge= 'Kannada'
            break
        case 'Chennai':
            population=4646732
            literacyRate=89.73
            langauge='Tamil'
            break
        case 'Mumbai':
            population=12442373
            literacyRate=89.73
            langauge= 'Marathi'
            break
        case 'Delhi':
            population=16787941
            literacyRate=86.30
            langauge='Hindi'
            break
           
    }
    //console.log(city);
    let text =`The Indian city of ${city.value} has a population ${population} of Language spoken is ${langauge} and literacy rate is ${literacyRate}%`
    //console.log(text);
    document.getElementById("result").innerHTML=text

} 
