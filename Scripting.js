function Validation(){
    // This is used to validate a form
    var fname = document.forms["Examform"].Firstname.value;
    var lname = document.forms["Examform"].Lastname.value;
    var pwd = document.forms["Examform"].Password.value;
    var phoneno = document.forms["Examform"].Phone.value;
    
    
    var conf_pwd = document.forms["Examform"].Conf_Password.value;
    //var Mail = document.forms["Examform"].Firstname.value;
    if(fname==""){
        alert("Firstname should not be empty");
    }
    if(lname==""){
        alert("lastname should not be empty");
    }
    if(pwd==""){
        alert("password atleast eight character");
    }
    if(conf_pwd==""){
        alert("password atleast eight character");
    }
    if(phoneno==""){
        alert("atleat 10 digit of phoneno");
    }
}