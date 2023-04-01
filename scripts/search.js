data = JSON.parse(localStorage.getItem("data"))||[]


let burger = document.querySelector(".burger")
let nav = document.querySelector(".nav")
let navlist = document.querySelector(".navlist")
let user = document.querySelector(".user")

burger.addEventListener("click",function(){

    nav.classList.toggle("height")
    navlist.classList.toggle("vis-res")
    user.classList.toggle("vis1-res")
   
    
  
})
   let content = document.getElementById("content")
function display(arr){
    content.html = ""

    arr.forEach(element => {
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

        content.append(card)
        anchor.append(image)
        card.append(anchor,title,line,category,price)
       
        anchor.addEventListener("click",function(){
          let openproduct = []
          openproduct.push(element)
          localStorage.setItem("open",JSON.stringify(openproduct))
        })

    });
}
display(data)
