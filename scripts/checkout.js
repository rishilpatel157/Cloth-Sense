let burger = document.querySelector(".burger")
let nav = document.querySelector(".nav")
let navlist = document.querySelector(".navlist")
let user = document.querySelector(".user")

burger.addEventListener("click",function(){
    
    nav.classList.toggle("height")
    navlist.classList.toggle("vis-res")
    user.classList.toggle("vis1-res")
    
    
    
})








let cartdata = JSON.parse(localStorage.getItem("cart"))||[]
let wish = JSON.parse(localStorage.getItem("wishlist"))||[]
let duplicate = JSON.parse(localStorage.getItem("duplicate"))||[]
let dupwish = JSON.parse(localStorage.getItem("duplicatewish"))||[]

var empty = document.getElementById("empty1")
// console.log(cart)

let apply = document.getElementsByClassName("applybtn")[0]
let applyhide = document.getElementsByClassName("hidecoupon")[0]
let gift = document.getElementsByClassName("giftbtn")[0]
let gifthide = document.getElementsByClassName("hidevoucher")[0]






let carttotal = document.getElementById("carttotal")
let gst = document.getElementById("gst")
let shipping = document.getElementById("shipping")
let total = document.getElementById("totalamount")
let sum = 0

cartdata.forEach(function(element) {
    
    p = element.price
    
    let pricenum =""
    for(let i =2;i<p.length;i++)
    {
        pricenum=pricenum+p[i]
    }
    
    sum = sum + Number(pricenum)*element.quantity

});
  carttotal.innerText = sum
  let gst1 = (sum*18)/100
  gst.innerText = gst1
  shipping.innerText = 50
  total.innerText = sum+gst1+50

  let submit = document.getElementById("submitbtn")

  submit.addEventListener("click",function(){
    alert("Details are saved")
  })

  checkout = document.getElementsByClassName("porder")[0]

  checkout.addEventListener("click",function(){
    alert("Order is placed successfully")
    cartdata = []
    duplicate = []
    
    localStorage.setItem("duplicate",JSON.stringify(duplicate))
    localStorage.setItem("cart",JSON.stringify(cartdata))
  })

  let searchcatch = document.getElementById("searchcatch")
let search = document.getElementsByClassName("search")[0]
searchcatch.addEventListener("mouseover",function(){
  search.classList.toggle("box")
 
})

  


