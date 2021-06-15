const date = document.getElementById("date");
date.textContent = new Date().getFullYear();


const toggleBtn = document.querySelector(".toggle-btn");
const links = document.querySelector(".links");
const nav = document.querySelector(".nav");
const allLinks = document.querySelectorAll(".link-item");
const topBtn = document.querySelector(".top-btn");
let containerHeight = 0;
let isShowLinksActive = false;
var isFirstClick = true;

toggleBtn.addEventListener("click",function(){
    links.classList.toggle("show-links");
    allLinks.forEach(function(item){
        containerHeight += item.getBoundingClientRect().height;
    })
    if(links.getBoundingClientRect().height === 0)
    { 
        links.style.height = `${containerHeight}px`;
        links.classList.add("show-links");
        isShowLinksActive==true;
    }
    else
    {    
        links.style.height = `0px`;
        containerHeight = 0;
        links.classList.remove("show-links");
        isShowLinksActive=false;
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

const linkContainer = document.querySelector(".link-container");
allLinks.forEach(function(item){
    item.addEventListener("click",function(e){
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        const navHeight = nav.getBoundingClientRect().height;
        const linkContainerHeight = links.getBoundingClientRect().height;
        const fixedNav = nav.classList.contains("fixed-nav");
        let position= element.offsetTop-navHeight;
        
        if(!fixedNav)
        {
            console.log("if statement entered");
            position = position - navHeight;  
        }
        if(links.getBoundingClientRect().height>80)
        {
            console.log("else if loop entered");
            position = position + linkContainerHeight;
        }
        
        window.scrollTo({
            left:0,
            top:position
        })
        links.style.height = `0px`;
        containerHeight = 0;
        isFirstClick = false;
        
    })
})

