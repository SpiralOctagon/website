var email_box = document.getElementById('email_box');
var emails = []

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    return (false)
}

function emailClick(){
    var email = email_box.value;

    if(emails.includes(email) == true){
        alert('Email already in use')
    }
    else if(ValidateEmail(email) == false){
        alert("Invalid Email")
    }
    else{
        emails.push(email)
    }
    
}

