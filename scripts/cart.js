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
let dupwish = JSON.parse(localStorage.getItem("duplicatewish"))||[]

var empty = document.getElementById("empty1")
// console.log(cart)

let apply = document.getElementsByClassName("applybtn")[0]
let applyhide = document.getElementsByClassName("hidecoupon")[0]
let gift = document.getElementsByClassName("giftbtn")[0]
let gifthide = document.getElementsByClassName("hidevoucher")[0]


apply.addEventListener("click",function(){
    applyhide.classList.toggle("hidecoupon") 
    
})

gift.addEventListener("click",function(){
    gifthide.classList.toggle("hidevoucher") 
    
})
let cart = document.getElementById("cart")
let totalsum = 0


function display(arr){
    cart.innerHTML = ""
    totalsum = 0
    empty.innerText = ""
    arr.forEach(function(element,i){
        
        let card = document.createElement("div")
        card.setAttribute("class","card")
        let image = document.createElement("img")
        image.setAttribute("src",element.images.img1)
        
        let title = document.createElement("div")
        title.setAttribute("class","title")
        let name1 = document.createElement("h2")
        
        name1.innerText = element.title
        
        let cat = document.createElement("p")
        cat.innerText = element.category
        let size = document.createElement("select")
        size.setAttribute("id","size")
        size.setAttribute("name","Size")
        
        let option1 = document.createElement("option")
        option1.setAttribute("value","XXS")
        option1.innerText = "XXS"
        let option2 = document.createElement("option")
        option2.setAttribute("value","XS")
        option2.innerText = "XS"
        let option3 = document.createElement("option")
        option3.setAttribute("value","S")
        option3.innerText = "S"
        let option4 = document.createElement("option")
        option4.setAttribute("value","M")
        option4.innerText = "M"
        let option5 = document.createElement("option")
        option5.setAttribute("value","L")
        option5.innerText = "L"
        let option6 = document.createElement("option")
        option6.setAttribute("value","XL")
        option6.innerText = "XL"
        let option7 = document.createElement("option")
        option7.setAttribute("value","XXL")
        option7.innerText = "XXL"
        
        size.append(option1,option2,option3,option4,option5,option6,option7)
        
        
         let quantityh3 = document.createElement("h3")
         let quantityspan = document.createElement("span")
         quantityspan.setAttribute("id","quantitynumber")
        let quantity = element.quantity
         quantityh3.innerText = "Quantity:- "
         quantityh3.append(quantityspan)
         quantityspan.innerText = element.quantity
         let incdec = document.createElement("div")
         incdec.setAttribute("class","incdec")
         let inc = document.createElement("button")
         inc.setAttribute("id","inc")
         let dec = document.createElement("button")
         dec.setAttribute("id","dec")
         inc.innerText = "+"
         dec.innerText = "-"

         incdec.append(dec,inc)
        

         
        
        let price = document.createElement("h3")
        price.setAttribute("id","pprice")
        price.innerText = element.price
        
        let button = document.createElement("div")
        button.setAttribute("id","button")
        let remove = document.createElement("button")
        remove.setAttribute("id","remove")
        let wishlist = document.createElement("button")
        wishlist.setAttribute("id","wishlist")
        remove.innerText = "REMOVE"
        wishlist.innerText = "MOVE TO WISHLIST"
        button.append(remove,wishlist)
        
        
        cart.append(card,button)
        card.append(image,title)
        title.append(name1,cat,size,quantityh3,incdec,price)
        inc.addEventListener("click",function(){
            element.quantity++
            localStorage.setItem("portfolio",JSON.stringify(arr))
            display(arr)
           })

           dec.addEventListener("click",function(){
            if(element.quantity>1)
            {
    
              element.quantity--
              localStorage.setItem("portfolio",JSON.stringify(arr))
              display(arr)
            }
           })   
    
        remove.addEventListener("click",function(){
             arr.splice(i,1)
             localStorage.setItem("duplicate",JSON.stringify(arr))

            localStorage.setItem("cart",JSON.stringify(arr))
            
            // let cartdata = JSON.parse(localStorage.getItem("cart"))||[]

            display(arr)
        })

        wishlist.addEventListener("click",function(){
            let flag = true
            for(let i = 0;i<dupwish.length;i++)
            {
                console.log(dupwish[i])
              if(dupwish[i].title==element.title)
              {
               flag = false
              }
            }

            console.log(wish)
            if(flag){
           wish.push(element)
           dupwish.push(element)
           localStorage.setItem("wishlist",JSON.stringify(wish))
           localStorage.setItem("duplicatewish",JSON.stringify(dupwish))
           
      
           
       
            }
            else
            {
                alert("Product Is Already Available In Wishlist")
            }
       })

       



        
        
        
        let p = element.price
       let pricenum = ""
        for(let i =2;i<p.length;i++)
        {
             pricenum=pricenum+p[i]
        }
        let q = Number(element.quantity)
        totalsum = totalsum+Number(pricenum)* q
        
       
    });
    
    
    let carttotal = document.getElementById("carttotal")
carttotal.innerText = `₹ ${totalsum}`
gsttotal = (totalsum*18)/100
let gst = document.getElementById("gst")
gst.innerText =`₹ ${gsttotal}`
let shippingcarg = document.getElementById("shipping")
 let ship = 0
if(totalsum==0){
     ship = 0
    shippingcarg.innerText = `₹ ${ship}`
    
    let final = totalsum + gsttotal - ship
    let totalamount = document.getElementById("totalamount")
    totalamount.innerText = `₹ ${Math.floor(final)}`
}
else if(totalsum!=0)
{
    console.log(carttotal);
    let ship = 50
    shippingcarg.innerText = `₹ ${ship}`
    
    let final = totalsum + gsttotal - ship
    let totalamount = document.getElementById("totalamount")
    totalamount.innerText = `₹ ${Math.floor(final)}`
}


if(totalsum==0)
{
  
    empty.innerText = "Your Cart is Empty"
}



}





display(cartdata)


let orderbutton1 = document.getElementsByClassName("porder")[0]
let orderbutton2 = document.getElementsByClassName("porder")[1]
logindata = JSON.parse(localStorage.getItem("login"))||[]
orderbutton1.addEventListener("click",function(){
    if(!logindata)
    {
        alert("Please Register First")
        window.location.href = "./login.html"
    }
    else
    {
      window.location.href = "./checkout"
    }

})
orderbutton2.addEventListener("click",function(){
    if(!logindata)
    {
        alert("Please Register First")
        window.location.href = "./login.html"
    }
    else
    {
      window.location.href = "./checkout.html"
    }

})

