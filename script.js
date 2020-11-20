
function validate(){
    
    var text= document.getElementById("text1").value;
    var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9_]+).([a-z]{2,8})(.[a-z]{2,8}?)$/;
    
        if(regx.test(text))
        {
            document.getElementById("lbltext").innerHTML="valid";
            document.getElementById("lbltext").style.visibility="visible";
            document.getElementById("lbltext").style.color="green"; 
            document.getElementById("text1").style.border="solid 3px green";  
        }
        else{
            document.getElementById("lbltext").innerHTML="invalid";
            document.getElementById("lbltext").style.visibility="visible";
            document.getElementById("lbltext").style.color="red"; 
            document.getElementById("text1").style.border="solid 3px red";  
        }
        
         
           
    }