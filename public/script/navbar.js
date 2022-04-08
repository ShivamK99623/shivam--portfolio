const hamberg = document.querySelector(".hamberg")
    const hide = document.querySelector("#hide")
    const show = document.querySelector("#show")
    const navbar = document.querySelector(".navbar")
    const menu = document.querySelector(".menu")
    const shows=()=>{
        menu.style.top = "0px"
        console.log("first")
        navbar.classList.add("hight");
        show.style.display = "none"
        hide.style.display = "block"
        setTimeout(() => {
            hides()
        }, 3000);
    }
    const hides=()=>{
        menu.style.top = "";
        navbar.classList.remove("hight");
        hide.style.display = "none"
        show.style.display = ""
    }
    show.addEventListener("click",shows)
    hide.addEventListener("click",hides)