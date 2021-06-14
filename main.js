const toggleBtn = document.querySelector(".toggle-btn");
const links = document.querySelector(".links");

toggleBtn.addEventListener("click",function(){
    links.classList.toggle("show-links");
})