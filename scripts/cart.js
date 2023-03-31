let burger = document.querySelector(".burger")
let nav = document.querySelector(".nav")
let navlist = document.querySelector(".navlist")
let user = document.querySelector(".user")

burger.addEventListener("click",function(){

    nav.classList.toggle("height")
    navlist.classList.toggle("vis-res")
    user.classList.toggle("vis1-res")
   
    
  
})



let cart = JSON.parse(localStorage.getItem("cart"))||[]

