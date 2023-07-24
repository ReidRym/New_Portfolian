let projects =document.querySelectorAll(".project-cards");

projects.forEach((card,index) => {

    let closeBtn = card.querySelector(".close-btn");
    closeBtn.addEventListener("click", () => {
        projects.forEach((item, i) => {
            item.classList.add("blur")
        })
        
    })
    card.classList.remove("active");
});

    card.addEventListener("click", (e) => {
        if(e.path[0] !=closeBtn){
            projects.forEach(item, i) => {
                if(index != i){
                    item.classList.add("blur")
            
        }
        
    })
    card.classList.add("active");
    