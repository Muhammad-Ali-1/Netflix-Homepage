document.addEventListener("DOMContentLoaded", function () {

    // const label = document.getElementById("emailLabel");
    // const email = document.getElementById("email");
    
    
   const learnMoreBtn = document.getElementById("learnMoreBtn")
   const hiddenSection = document.getElementById("hiddenSection")
   learnMoreBtn.addEventListener("click",() => {
    hiddenSection.classList.remove("hidden")
    learnMoreBtn.style.display= "none"
   })
})
