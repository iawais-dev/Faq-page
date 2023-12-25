const faq = document.querySelectorAll(".faq");


faq.forEach((head , i) =>{
    head.addEventListener("click" , ()=>{
        head.nextElementSibling.classList.toggle("active");
        
        const open = head.querySelector(".open");
        const close = head.querySelector(".close");

        if(head.nextElementSibling.classList.contains("active")){
            close.classList.add("active");
            open.classList.remove("active");
        }
        else{
            open.classList.add("active");
            close.classList.remove("active");

        }
    });
});