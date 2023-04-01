

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

let wishlist = JSON.parse(localStorage.getItem("wishlist"))||[]
let dupwish = JSON.parse(localStorage.getItem("duplicatewish"))||[]
let dup = JSON.parse(localStorage.getItem("duplicate"))||[]
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
if(product.images.img1!=""){
    img1.setAttribute("src",product.images.img1)
}
else
{
    img1.style.display = "none"
}

if(product.images.img2!=""){
    img2.setAttribute("src",product.images.img2)
}
else
{
    img2.style.display = "none"
}


if(product.images.img3!=""){
    img3.setAttribute("src",product.images.img3)
}
else
{
   img3.style.display = "none"
}

if(product.images.img4!=""){
    img4.setAttribute("src",product.images.img4)
}
else
{
    img4.style.display = "none"

}

let addbtn = document.getElementsByClassName("add")[0]
let wishlistbtn = document.getElementsByClassName("wish")[0]
 let quantity = document.getElementById("qunatity")
let size = document.getElementById("size")
let alert1 = document.getElementById("alert")

 
        
addbtn.addEventListener("click",function(){
    let flag = true
    for(let i = 0;i<dup.length;i++)
    {
        // console.log(dup[i],cart.title)
        if(dup[i].title==product.title)
        {
            flag = false
        }
    }
    if(size.value==""){
        alert("Please a Size")
         return
    }
    if(flag){
        dup.push(product)
        console.log(dup)
              localStorage.setItem("duplicate",JSON.stringify(dup))
             product.size = size.value
            product.quantity = Number(quantity.value)
            cart.push(product)
            localStorage.setItem("cart",JSON.stringify(cart))
            }   
            else{
                
                alert("Product Is Already Added To Cart")
            }
    })
    wishlistbtn.addEventListener("click",function(){
        let flag = true
        for(let i = 0;i<dupwish.length;i++)
        {
          if(dupwish[i].title==product.title)
          {
           flag = false
          }
        }
        if(size.value==""){
            alert("Please a Size")
             return
        }
        if(flag){
          dupwish.push(product)
          localStorage.setItem("duplicatewish",JSON.stringify(dupwish))

          product.size = size.value
        wishlist.push(product)
        localStorage.setItem("wishlist",JSON.stringify(wishlist))
        }
        else{

            alert("Product Is Already Added To Wishlist")
        }

    })
    
