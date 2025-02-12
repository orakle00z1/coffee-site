const toggleThemeBtn = document.querySelectorAll(".toggle-theme");
const submenuOpenBtn = document.querySelector(".submenu-open-btn");
const submenu = document.querySelector(".submenu");
const navOpen = document.querySelector(".nav-icon");
const navClose = document.querySelector(".nav-close");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");
const cartOpenBtn = document.querySelector(".cart-icon");
const cartCloseBtn = document.querySelector(".cart-close");
const cart = document.querySelector(".cart");


toggleThemeBtn.forEach(btn => {
    btn.addEventListener("click", function (){
            if (localStorage.theme === "dark"){
                document.documentElement.classList.remove("dark");
                localStorage.theme = "light";
            } else {
                document.documentElement.classList.add("dark");
                localStorage.setItem("theme" , "dark");
            }
    })
})

submenuOpenBtn.addEventListener("click", (event) => {
    event.currentTarget.parentElement.classList.toggle("text-orange-300");

    submenu.classList.toggle("hidden");
    // submenu.classList.toggle("submenu--open");

})

navOpen.addEventListener("click", () =>{
    nav.classList.remove("-right-64");
    nav.classList.add("right-0");
    overlay.classList.remove("overlay")
    overlay.classList.add("overlay--visible");
})

cartOpenBtn.addEventListener("click", () =>{
    cart.classList.remove("-left-64");
    cart.classList.add("left-0");
    overlay.classList.remove("overlay")
    overlay.classList.add("overlay--visible");
})



navClose.addEventListener("click" , () =>{
    nav.classList.remove("right-0");
    nav.classList.add("-right-64");
    overlay.classList.remove("overlay--visible");
    overlay.classList.add("overlay");
})

cartCloseBtn.addEventListener("click" , () =>{
    cart.classList.remove("left-0");
    cart.classList.add("-left-64");
    overlay.classList.remove("overlay--visible");
    overlay.classList.add("overlay");
})

overlay.addEventListener("click" , () =>{
    nav.classList.remove("right-0");
    nav.classList.add("-right-64");
    overlay.classList.remove("overlay--visible");
    overlay.classList.add("overlay");
})

overlay.addEventListener("click" , () =>{
    cart.classList.remove("left-0");
    cart.classList.add("-left-64");
    overlay.classList.remove("overlay--visible2");
    overlay.classList.add("overlay2");
})