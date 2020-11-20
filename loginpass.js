function validatepwd(){

    var pwd= document.getElementById("pwd").value;

    if(pwd.value.trim()==""){
        alert("password cannot be empty");
        return false;
    }
    else if(pwd.value.length<8){
        alert("password length should be min 8 letters");
        return false;
    }
    else{
    return true;
    }
}