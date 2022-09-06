let result=document.getElementById("inputtext");

let calculate=(number)=>{
    result.value+=number;
}
let percent=(number)=>{
    result.value/=100;
}
let Result=()=>{
    try{
        result.value=eval(result.value)
    }
    catch(err){
        alert("enter a valid input");
    }
}
function clr(){
    result.value=" ";
}
function del(){
    result.value=result.value.slice(0,-1);
}