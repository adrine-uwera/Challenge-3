
function emailContainAlphabetsSpecialChars() { 
    var checkemail=document.getElementById("email").value;

    if (checkemail!="") { 

            var emailValidationRegularExpression = /\S+@\S+\.\S+/;

            var validation = emailValidationRegularExpression.test(document.getElementById("email").value);

            if (!validation) {
                document.getElementById("email").style.borderColor='red';
                document.getElementById("error").innerHTML="Please provide a valid email address";
            } else { 
                document.getElementById("success").innerHTML="Email submitted";
                document.getElementById("error").style.display='none';
                document.getElementById("email").style.borderColor='green';
            }
            return validation;
   }else{
    document.getElementById("email").style.borderColor='red';
    document.getElementById("error").innerHTML="Whoops! It looks like you forgot to add your email";
     
   } 
}