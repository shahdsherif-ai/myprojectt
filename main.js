function  convertvalue(){
var dollar = document.getElementById("dollar").value;
var result = document.getElementById("result");

if(dollar == ""){
    result.innerHTML = "Enter Data";
   // return false;
}else if (isNaN (dollar)){
    result.innerHTML ="Enter Number not Text";
   // return false;
}else if(dollar<0){
result.innerHTML = "Enter postive number";
//return false;
}else if ( dollar ==0){
    result.innerHTML= "Enter number rather than elzero";
   // return false;
}else{
    result.innerHTML = dollar *50 + "Egyptian pound";
   // return false;
}
return false;
}


