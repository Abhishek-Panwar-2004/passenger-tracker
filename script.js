let counthtml=document.getElementById("count")
console.log(counthtml)

count=0
function inc() {
    count+=1
    counthtml.innerText=count
}

let debtnhtml=document.getElementById("debtn")
function dec() {
    let minus=count-=1
    counthtml.innerText=minus
}

pehtml=document.getElementById("pe")
pehtml.innerText+=count

function save() {
    pehtml.innerText+= "-"+count
}


let point=3
function remove1point(){
    point-=1
    console.log(point)
}
function add3points(){
    point+=3
    console.log(point)
}

