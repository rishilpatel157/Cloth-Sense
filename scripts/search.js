data = JSON.parse(localStorage.getItem("data"))||[]


let burger = document.querySelector(".burger")
let nav = document.querySelector(".nav")
let navlist = document.querySelector(".navlist")
let user = document.querySelector(".user")
let searchcatch = document.getElementById("searchcatch")
let search = document.getElementsByClassName("search")[0]
searchcatch.addEventListener("mouseover",function(){
  search.classList.toggle("box")
 
})


burger.addEventListener("click",function(){

    nav.classList.toggle("height")
    navlist.classList.toggle("vis-res")
    user.classList.toggle("vis1-res")
   
    
  
})
   let content = document.getElementById("content")
function display(arr){
    content.innerHTML = ""

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

let searchbtn = document.getElementById("searchbtn")
let  searchinput = document.getElementById("searchinput")


searchbtn.addEventListener("click",function(){
  filtered =  data.filter(function(ele){
    if(ele.title.toUpperCase().includes(searchinput.value.toUpperCase()) || ele.category.toUpperCase().includes(searchinput.value.toUpperCase())){
        return true
    }
                  
    })
   content.innerHTML = ""
    display(filtered)
})

  pricedata = data.map(function(ele){
                 return Number(ele.price.replace(`₹ `,""))
})

for(let i = 0;i<data.length;i++){

  data[i].pricedata = pricedata[i]
}
// console.log(data)

  let minrangeinput = document.getElementById("minrangeinput")
let maxrangeinput  = document.getElementById("maxrangeinput")

 let pricerange = document.getElementById("pricerange")
 

 console.log(minrangeinput.value)
 pricerange.addEventListener("submit",function(e){
  e.preventDefault()
  console.log("fdflj")
        rangedata =   data.filter(function(ele){
            if(ele.pricedata>=minrangeinput.value && ele.pricedata<=maxrangeinput.value){
              return true
            }
          })
          display(rangedata)
          
 })

 let hightolow = document.getElementById("hightolow")
 let lowtohigh = document.getElementById("lowtohigh")
 lowtohigh.addEventListener("click",function(){
          
      let lowto =  data.sort(function(a,b){
        return a.pricedata - b.pricedata
       })
       console.log(lowto)

       display(lowto)

 })

 hightolow.addEventListener("click",function(){
          
  let highto =  data.sort(function(a,b){
    return b.pricedata - a.pricedata
   })

   display(highto)

})

let shirtbox = document.getElementById("shirts")
let oversizedTshirt = document.getElementById("oversizedTshirt")
let fullSleeve = document.getElementById("fullSleeve")
let jeans = document.getElementById("jeans")
let tShirt = document.getElementById("tShirt")
let shorts = document.getElementById("shorts")
let oversizedFull = document.getElementById("oversizedFull")
let naruto = document.getElementById("naruto")

function filtercat(str){
  shirtsdata =  data.filter(function(ele){
    if(ele.category==str){
        return true
    }
                  
    })
   content.innerHTML = ""
    display(shirtsdata)
  }


 shirtbox.addEventListener("click",function(){
      filtercat("Shirts")
  })

 
function checkbox(obj,str)
{

  obj.addEventListener("click",function(){
    
 if(obj.checked==true){

      obj =  data.filter(function(ele){
        if(ele.category==str){
          return true
        }
        
      })
      content.innerHTML = ""
      display(obj)
    }
else
  {
    display(data)

  }
  })
  
  
  
}
  
  checkbox(shirtbox,"Shirts")
  checkbox(oversizedTshirt,"Oversized T-Shirts")
checkbox(fullSleeve,"Full Sleeve T-shirts")
checkbox(jeans,"Jeans")
checkbox(tShirt,"TShirts")
checkbox(shorts,"Shorts")
checkbox(oversizedFull,"Full Sleeve T-shirts")
checkbox(naruto,"Naruto")
// 

//






  let index = JSON.parse(localStorage.getItem("shirt"))

  if(index.length>2){
           
    filtercat(index)
  }
  else
  {
    display(data)
  }
  
  let selectall = document.getElementById("selectall")

  selectall.addEventListener("click",function(){

    if(selectall.checked==true){
      shirts.checked=true
      oversizedTshirt.checked=true
      fullSleeve.checked=true
      jeans.checked=true
      tShirt.checked=true
      shorts.checked=true
      oversizedFull.checked=true
      naruto.checked=true
      display(data)
    }
    else
    {
      shirts.checked=false
      oversizedTshirt.checked=false
      fullSleeve.checked=false
      jeans.checked=false
      tShirt.checked=false
      shorts.checked=false
      oversizedFull.checked=false
      naruto.checked=false
      display(data)
    }
  })