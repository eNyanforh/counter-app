countEl= document.getElementById("count-el")
saveEl=document.getElementById("save-el")
let count=0;



function increment(){
    count++
    countEl.innerText=count
}

let saver= 0

function save(){
    saver= " " + count + " -"
    saveEl.innerText+=saver
    count=0
    countEl.innerText=count
}







