const date = document.getElementById("date");
date.textContent = new Date().getFullYear();


const toggleBtn = document.querySelector(".toggle-btn");
const links = document.querySelector(".links");
const nav = document.querySelector(".nav");
const allLinks = document.querySelectorAll(".link-item");
const topBtn = document.querySelector(".top-btn");
let containerHeight = 0;


toggleBtn.addEventListener("click",function(){
    // links.classList.toggle("show-links");
    allLinks.forEach(function(item){
        containerHeight += item.getBoundingClientRect().height;
    })
    if(links.getBoundingClientRect().height === 0)
    { 
        links.style.height = `${containerHeight}px`;
        links.classList.add("show-links");
    }
    else
    {    
        links.style.height = `0px`;
        containerHeight = 0;
        links.classList.remove("show-links");
    } 
})

window.addEventListener("scroll",function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = nav.getBoundingClientRect().height;
    if(scrollHeight > navHeight)
        nav.classList.add("fixed-nav");
    else    
        nav.classList.remove("fixed-nav");
    if(scrollHeight > 500)  
    {    
        topBtn.classList.add("show-links")
    }
    else
        topBtn.classList.remove("show-links");
})  

// allLinks.forEach(function(link){
//     consol.log(link.getBoundingClientRect());
// })

