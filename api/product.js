

let product = JSON.parse(localStorage.getItem("open"))||[]
product = product[0]
let burger = document.querySelector(".burger")
let nav = document.querySelector(".nav")
let navlist = document.querySelector(".navlist")
let user = document.querySelector(".user")

burger.addEventListener("click",function(){
    
    nav.classList.toggle("height")
    navlist.classList.toggle("vis-res")
    user.classList.toggle("vis1-res")
    
    
    
})

let list = document.getElementsByClassName("listing")[0]

let listing = document.getElementsByClassName("list")[0]
list.addEventListener("click",function(){
    listing.classList.toggle("list")
})

let des = document.getElementsByClassName("descrip")[0]

let descrip = document.getElementsByClassName("listdes")[0]
des.addEventListener("click",function(){
descrip.classList.toggle("listdes")
})

let cart = JSON.parse(localStorage.getItem("cart"))||[]
// console.log(product)
let title = document.getElementById("title")
let category = document.getElementById("category")
let price = document.getElementById("price")
let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")
let img3 = document.getElementById("img3")
let img4 = document.getElementById("img4")

title.innerText = product.title
category.innerText = product.category
price.innerText = product.price

// if(product)
if(product.images.img1!=undefined){
    img1.setAttribute("src",product.images.img1)
}
else
{
    img1.setAttribute("src","")
}

if(product.images.img2!=undefined){
    img2.setAttribute("src",product.images.img2)
}
else
{
    img2.setAttribute("src","")
}


if(product.images.img3!=undefined){
    img3.setAttribute("src",product.images.img3)
}
else
{
   img3.style.display = "none"
}

if(product.images.img4!=undefined){
    img4.setAttribute("src",product.images.img4)
}
else
{
    img4.style.display = "none"

}

let addbtn = document.getElementsByClassName("add")[0]
let wishlistbtn = document.getElementsByClassName("wish")[0]
 let quantity = document.getElementById("qunatity")
 
 addbtn.addEventListener("click",function(){
     product.quantity = Number(quantity.value)
     cart.push(product)
     localStorage.setItem("cart",JSON.stringify(cart))

})
