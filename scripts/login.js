let burger = document.querySelector(".burger")
let nav = document.querySelector(".nav")
let navlist = document.querySelector(".navlist")
let user = document.querySelector(".user")

burger.addEventListener("click",function(){
    
    nav.classList.toggle("height")
    navlist.classList.toggle("vis-res")
    user.classList.toggle("vis1-res")
    
    
    
})





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

hidelogin.style.opacity = "0"
loginform.style.opacity = "0"
loginform.style.zIndex ="0"
let loginbtn  = document.getElementById("classlogin")
registerlogin1.addEventListener("click",function(){
      
    regiterhide.style.opacity = ""
    registerform.style.opacity = ""
   hidelogin.style.opacity = "0"
   loginform.style.opacity = "0"
   loginform.style.zIndex ="0"
   registerform.style.zIndex ="12"
   registerlogin1.style.backgroundColor = "rgb(17,122,122)"
   loginbtn.style.backgroundColor = "rgb(255,255,255)"
   registerlogin1.style.color = "rgb(255,255,255)"
   loginbtn.style.color = "black"


    
    
})

loginbtn.addEventListener("click",function(){
      
    regiterhide.style.opacity = "0"
    registerform.style.opacity = "0"
    hidelogin.style.opacity = ""
    loginform.style.opacity = ""

    loginform.style.zIndex ="12"
    registerform.style.zIndex ="0"

    loginbtn.style.backgroundColor = "rgb(17,122,122)"
    registerlogin1.style.backgroundColor = "rgb(255,255,255)"
   loginbtn.style.color = "rgb(255,255,255)"
   registerlogin1.style.color = "black"
     
     
 })
 let registerdata = JSON.parse(localStorage.getItem("register"))||[]

 registerbtn.addEventListener("click",function(){
    console.log(passwordenter);
    console.log(passwordreenter);
    if(passwordenter.value!=passwordreenter.value){
        alert("Password and Confirm Password are not Matching")
    }
    else if(emailregister.value=="" || passwordenter.value=="" || passwordreenter.value== "" )
    {
        alert("Please fill complete Data")

    }
    else
    {
       let  register = {
        emailregis : emailregister.value ,
        passwordregis : passwordreenter.value 

       }
       registerdata.push(register)
       localStorage.setItem("register",JSON.stringify(registerdata))
       alert("Successfully Registered")
       alert("Click on login to process further")




    }

})

let logindata = JSON.parse(localStorage.getItem("login"))||[]
buttonlogin.addEventListener("click",function(){
    if(emaillogin.value=="" || passwordlogin.value=="")
    {
        alert("Please enter complete details")
    }
    else 
    {
        flag = false
        registerdata.forEach(element => {
             if(emaillogin.value != element.emailregis || passwordlogin.value != element.passwordregis)
             {
                                                   
                alert("Details are not Matching")
                
             }
             else if (emaillogin.value == element.emailregis && passwordlogin.value == element.passwordregis)
             {
                alert("Successfully Logged In")
                 logindata[0]= true
                localStorage.setItem("login",JSON.stringify(logindata))
                window.location.href = "./cart.html"
             }

         
        });
        
        if(flag){

        }
    }
})