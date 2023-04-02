let registerlogin1 = document.getElementById("registerlogin1")
let regiterhide = document.getElementsByClassName("hideregister")[0]
let hidelogin = document.getElementById("hidelogin")
let buttonlogin = document.getElementById("loginbutton")


let loginform = document.getElementById("loginform")
let registerform = document.getElementById("registerform")


let emailregister = document.getElementById("emailregister")
let passwordenter = document.getElementById("passwordenter")
let passwordreenter = document.getElementById("passwordreenter")
let emaillogin = document.getElementById("emaillogin")
let passwordlogin = document.getElementById("passwordlogin")


buttonlogin.addEventListener("click",function(){
    if(emaillogin.value=="" || passwordlogin.value=="")
    {
        alert("Please enter complete details")
    }
    else 
    {
          if(emaillogin.value != "rishilpatel157@gmail.com" && passwordlogin.value != "12345")
             {
                alert("Details are not Matching")
             }
             else if (emaillogin.value =="rishilpatel157@gmail.com" && passwordlogin.value == "12345")
             {
                alert("Successfully Logged In")
                window.location.href = "./checkout.html"
             }
        
    }
})