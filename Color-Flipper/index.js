const k=document.getElementById("name")
console.log(k)
let hex=[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
const container=document.getElementById("container")
 k.addEventListener('click',changecolor)

 function changecolor(){
    let hexcolor='#'
    for(let i=0;i<6;i++){
       hexcolor+=hexaValue()
    }
    ///console.log(hexcolor)
     container.style.backgroundColor=hexcolor
 }
//console.log(hexaValue())

function hexaValue(){
    let randomnumber=Math.floor(Math.random()*16)
    return hex[randomnumber]
    
}

