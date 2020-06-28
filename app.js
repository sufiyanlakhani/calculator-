// function setName(){
//     var name = document.getElementById('zero');
//     name.value = 0;
// }
setName() 

function getnuMber(num){
    var result = document.getElementById("zero");
    result.value += num;
}
function clearResult(){
    var result = document.getElementById("zero");
    result.value = "";
}
function getResult(){
    var result = document.getElementById("zero");
    result.value = eval(result.value)

}
function del(){
    var result= document.getElementById("zero").value;
if(result.length > 0){
result = result.substring(0, result.length - 1);
document.getElementById("zero").value = result;
}
}