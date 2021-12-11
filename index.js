// function for clear error;
function clearError(){
    error = document.getElementsByClassName("errorMsg");
     for(let items of error){
       items.innerHTML = "";
     }
  }
  
  // function for intilize id and error;
  function errorValue(id,error){
    element = document.getElementById(id)
    document.getElementsByClassName("errorMsg")[0].innerHTML = error;
  }
  
  // form validation function
  function validation(){
    var returnval = true;
  
    var name = document.forms["form"]["fname"].value;
    if(name.length < 4){
      errorValue("name", "*ENTER FULLNAME!")
      returnval = false;
    }
  
    var email = document.forms["form"]["femail"].value;
    if(email.length > 30){
      errorValue("email", "*ENTER VALID E-MAILS!")
      returnval = flase;
    }
  
    var phone = document.forms["form"]["fphone"].value;
    if(phone.length != 10){
      errorValue("phone", "*ENTER VALID PHONE NUMBER!")
      returnval = false;
    }
  
    var pass = document.forms["form"]["fpass"].value
    if(pass.length < 4){
      errorValue("pass", "*CREATE STRONG PASSWORD!")
      returnval = flase;
    }
  
    var cpass = document.forms["form"]["cpass"].value;
    if(pass.value != cpass){
      errorValue("cpass", "*ENTER SAME PASSWORD AS ABOVE!")
      returnval = false;
    }
  
    return returnval;
  }