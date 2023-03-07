


/*
    The purpose of the following function below is so that the form to enter the email or phone number of user will either appear or disappear
    depending on the state of the checkboxes

*/ 
function emailChecked(){
    var cb = document.getElementById("emailSelect")
    var emailForm = document.getElementById("emailInput")
    if(cb.checked ==true){
        emailForm.style.display = "block";  
    }else{
        emailForm.style.display = "none";
    }
}

function phoneChecked(){
    var cb1 = document.getElementById("phoneSelect")
    var phoneForm = document.getElementById("phoneInput")
    if(cb1.checked ==true){
        phoneForm.style.display = "block";
    }else{
        phoneForm.style.display = "none";
    }
}

