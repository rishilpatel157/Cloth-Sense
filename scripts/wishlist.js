let burger = document.querySelector(".burger")
let nav = document.querySelector(".nav")
let navlist = document.querySelector(".navlist")
let user = document.querySelector(".user")

burger.addEventListener("click",function(){
    
    nav.classList.toggle("height")
    navlist.classList.toggle("vis-res")
    user.classList.toggle("vis1-res")
    
    
    
})

let searchcatch = document.getElementById("searchcatch")
let search = document.getElementsByClassName("search")[0]
searchcatch.addEventListener("mouseover",function(){
  search.classList.toggle("box")
 
})



let wishlist = JSON.parse(localStorage.getItem("wishlist"))||[]
let dupwishlist = JSON.parse(localStorage.getItem("duplicatewish"))||[]
// console.log(wishlist)
let hide = document.getElementsByClassName("hide")[0]

let openproduct = JSON.parse(localStorage.getItem("open"))||[]

console.log(wishlist.length>0)

    hide.classList.toggle("hide")      

    let content = document.getElementById("content")
    function display(arr){
        content.html = ""
        
        arr.forEach(function(element,i) {
            let anchor = document.createElement("a")
            anchor.setAttribute("href","./product.html")
            let card = document.createElement("div")
            card.setAttribute("class","card")
            let image = document.createElement("img")
            let title = document.createElement("h4")
            let line = document.createElement("hr")
            let category = document.createElement("h5")
            let price = document.createElement("h5")
            image.setAttribute("src",element.images.img1)
            title.innerText = element.title
            category.innerText =  element.category
            price.innerText =  element.price

            let buttonremove = document.createElement("button")
          buttonremove.innerText = "Remove From Cart"
          buttonremove.setAttribute("class","remove")
            
            content.append(card)
            anchor.append(image)
            card.append(anchor,title,line,category,price,buttonremove)
            
            anchor.addEventListener("click",function(){
                let openproduct = []
                openproduct.push(element)
                localStorage.setItem("open",JSON.stringify(openproduct))
        })

        buttonremove.addEventListener("click",function(){
          
             arr.splice(i,1)
             localStorage.setItem("duplicatewish",JSON.stringify(arr))

            localStorage.setItem("wishlist",JSON.stringify(arr))
            
            content.innerHTML = ""
            display(arr)
        })

        
    });
}

display(wishlist)

