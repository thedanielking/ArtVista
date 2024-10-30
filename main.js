// clearing form details
const emailClear = document.getElementById("clearEmail");

emailClear.addEventListener("click", (e)=>{
    document.getElementById("inputEmail").value = " ";
})


const passwordClear = document.getElementById("clearPassword");
let click = 1;

passwordClear.addEventListener("click", (e)=>{
    if(click % 2 !== 0){
        document.getElementById("inputPassword").type = "text";
    }
    else{
        document.getElementById("inputPassword").type = "password";
    }
     click++;
})






















