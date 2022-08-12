const insideNumber = document.getElementById("number").value = 0

var num = insideNumber


function plusNumber(){
    num = num+1
    console.log(num)
    document.getElementById("number").value = num
}

function minusNumber(){
    num = num-1
    console.log(num)
    document.getElementById("number").value = num
}