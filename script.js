const users = [
  {
    name: "Mary Johnson",
    pic: "https://randomuser.me/api/portraits/women/57.jpg",
    bio: "Mary is a software engineer from New York."
  },
  {
    name: "Glenda Anderson",
    pic: "https://randomuser.me/api/portraits/women/76.jpg",
    bio: "Glenda is a graphic designer from California."
  },
  {
    name: "Jason Jensen",
    pic: "https://randomuser.me/api/portraits/men/39.jpg",
    bio: "Jason is a data scientist from Texas."
  },
  {
    name: "Gregory Jones",
    pic: "https://randomuser.me/api/portraits/men/22.jpg",
    bio: "Gregory is a product manager from Florida."
  },
  {
    name: "Mike McCoy",
    pic: "https://randomuser.me/api/portraits/men/42.jpg",
    bio: "Mike is a web developer from Illinois."
  },
  {
    name: "Jeremy Phillips",
    pic: "https://randomuser.me/api/portraits/men/2.jpg",
    bio: "Jeremy is a UX designer from Ohio."
  },
  {
    name: "Denise Allen",
    pic: "https://randomuser.me/api/portraits/women/48.jpg",
    bio: "Denise is a project manager from Georgia."
  },
  {
    name: "Timmothy Wilson",
    pic: "https://randomuser.me/api/portraits/men/66.jpg",
    bio: "Timmothy is a software architect from Arkansas."
  },
  {
    name: "Leo Burke",
    pic: "https://randomuser.me/api/portraits/men/13.jpg",
    bio: "Leo is a database administrator from New Mexico."
  },
  {
    name: "Stephanie Hill",
    pic: "https://randomuser.me/api/portraits/women/22.jpg",
    bio: "Stephanie is a QA engineer from Louisiana."
  },
  {
    name: "Mia Armstrong",
    pic: "https://randomuser.me/api/portraits/women/49.jpg",
    bio: "Mia is a business analyst from Kansas."
  },
  {
    name: "Lois Fisher",
    pic: "https://randomuser.me/api/portraits/women/31.jpg",
    bio: "Lois is a content writer from New York."
  },
  {
    name: "Maurice Cook",
    pic: "https://randomuser.me/api/portraits/men/40.jpg",
    bio: "Maurice is a system administrator from Wisconsin."
  },
  {
    name: "Ricky Kennedy",
    pic: "https://randomuser.me/api/portraits/men/69.jpg",
    bio: "Ricky is a network engineer from New Hampshire."
  },
  {
    name: "Marsha Scott",
    pic: "https://randomuser.me/api/portraits/women/85.jpg",
    bio: "Marsha is a technical support specialist from Massachusetts."
  },
  {
    name: "Tonya Morales",
    pic: "https://randomuser.me/api/portraits/women/57.jpg",
    bio: "Tonya is a customer service representative from Maine."
  },
  {
    name: "Dylan Jordan",
    pic: "https://randomuser.me/api/portraits/men/33.jpg",
    bio: "Dylan is a security analyst from Nevada."
  },
  {
    name: "Bryan Chambers",
    pic: "https://randomuser.me/api/portraits/men/95.jpg",
    bio: "Bryan is a business consultant from Alaska."
  },
  {
    name: "Frederick Hamilton",
    pic: "https://randomuser.me/api/portraits/men/46.jpg",
    bio: "Frederick is a software tester from Kentucky."
  },
  {
    name: "Margie Neal",
    pic: "https://randomuser.me/api/portraits/women/54.jpg",
    bio: "Margie is a marketing manager from New Mexico."
  }
];
let par=document.querySelector(".parent")
function showuser(arr){
    arr.forEach(element => {
        let div=document.createElement("div")
          div.classList.add("card")
          let img=document.createElement("img")
          
          let blur=document.createElement("div")
          blur.classList.add("blurred-layer")
          let content=document.createElement("div")
          content.classList.add("content")
          let headding=document.createElement("h3")
          let detail=document.createElement("p")
       par.append(div)
       div.append(img)
       div.append(blur)
       div.append(content)
       content.append(headding)
       headding.textContent=element.name
       content.append(detail)
       detail.textContent=element.bio
       
        img.setAttribute("src",element.pic)
        
    });

}
let input=document.querySelector("input")
input.addEventListener("input",(e)=>{
    let words=input.value.split(" ")
    let capiatalize=words.map((word)=>{
        if(word.length===0){
            return ""
        }
        else{
            return word.charAt(0).toUpperCase()+word.slice(1).toLowerCase()
        }

    })
  let newUser=users.filter((user)=>{
   
    return user.name.startsWith(capiatalize.join(" "))
    
  })
  if(newUser.length===0){
  
   let h1= document.querySelector(".h1")
   h1.style.display="block"

  }
  else{
     document.querySelector(".h1").style.display="none"

  }
  par.innerHTML=""
  
  showuser(newUser)
 console.log(newUser)
    

})

showuser(users)


 
