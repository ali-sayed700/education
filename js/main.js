
let profile = document.querySelector(".profile")
let toggle_btn = document.getElementById("toggle-btn")
let darkMode = localStorage.getItem("dark-mode")


 document.querySelector("#user-btn").onclick = ()=> {
    profile.classList.toggle("active")

 }


 let search = document.querySelector('.header .flex .search-form');
 

 document.querySelector('#search-btn').onclick = () =>{
     search.classList.toggle('active');
    profile.classList.remove('active');
 }


let navBox = document.querySelector('.nav-box');
document.querySelector('#menu-btn').onclick = () =>{
    navBox.classList.toggle('active');
    document.body.classList.toggle('active');
 }
 
 document.querySelector('#close-btn').onclick = () =>{
    navBox.classList.remove('active');
    document.body.classList.remove('active');
 }

 window.onscroll = () =>{
    profile.classList.remove('active');
    search.classList.remove('active');
 
    if(window.innerWidth < 1200){
        navBox.classList.remove('active');
       document.body.classList.remove('active');
    }
 }


 function enableDark() {
    toggle_btn.classList.replace("fa-sun","fa-moon");
     document.body.classList.add("dark")
     localStorage.setItem("dark-mode", "enabled")
 }


  function disableDarkMode () {
    toggle_btn.classList.replace("fa-moon","fa-sun");
    document.body.classList.remove('dark');
    localStorage.setItem("dark-mode", "disabled")

 }

 if(darkMode === "enabled") {
    enableDark() 
 }

toggle_btn.onclick = (e) => {
   darkMode = localStorage.getItem("dark-mode")
     if (darkMode === "disabled") {
    enableDark() 
         
     }else{
        disableDarkMode()
     }
 }