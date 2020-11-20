function validate(){
    var text = document.getElementById("cell-no").value;

    var regx = /^[7-9]\d{9}$/;
    if(regx.test(text))
    {
        document.getElementById("lbltext").innerHTML="valid";
        document.getElementById("lbltext").style.visibility="visible";
        document.getElementById("lbltext").style.color="green";   
        document.getElementById("cell-no").style.border="solid 3px green";    
    }
    else{
        document.getElementById("lbltext").innerHTML="invalid";
        document.getElementById("lbltext").style.visibility="visible";
        document.getElementById("lbltext").style.color="red"; 
        document.getElementById("cell-no").style.border="solid 3px red";
    }
    var flag=false;
    if ((/^([0-9]{3}).([0-9]{3}).([0-9]{4})$/regx.test(text.trim())) == true)
        flag = true;
    if ((/^([0-9]{3})-([0-9]{3})-([0-9]{4})$/regx.test(text.trim())) == true)
        flag = true;
    if ((/^([0-9]{3}) ([0-9]{3}) ([0-9]{4})$/regx.test(text.trim())) == true)
        flag = true;
    if ((/^([0-9]{10})$/regx.test(text.trim())) == true)
        flag = true;
    if (flag == false) {
        alert("Phone number not in correct format");
        return false;
}
    
}