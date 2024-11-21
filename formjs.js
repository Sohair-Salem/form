function loginin(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("Email").value;
    var number = document.getElementById("Number").value;
    var pass  = document.getElementById("Password").value;
    var passWord = document.getElementById("Copassword").value;
    var error = document.getElementById("error");
    var text = " ";


    if (firstName.length  < 4) {
        text = "Please enter your first name";
        error.innerHTML = text;
        return false;
    }
    else if(lastName.length < 4){
        text = "Please enter your last name";
        error.innerHTML = text;
        return false;

    }
    else if(email.indexOf("@")== -1){
        text = "Please enter the correct your email";
        error.innerHTML = text;
        return false;

    }
    else if(isNaN(number) || number.length != 11){
        text = "Please enter the correct 11-digit number";
        error.innerHTML = text;
        return false;

    }
    else if(pass.length < 8){
        text = "password must be 8 characters long";
    }
    else if(pass !== passWord){
        text ="password is do not compatible";
        error.innerHTML = text;
        return false;
    }
    else{
        alert("Registration successful");
        return true;
    }
}