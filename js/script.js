const navbar = document.querySelector(".navbar");
const arrow = document.querySelector(".nar");


function userScroll() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 70) {
        navbar.classList.add("navbar-sticky");
        arrow.classList.add("d-block");
        arrow.classList.remove("d-none");
    } else {
        navbar.classList.remove("navbar-sticky");
        arrow.classList.add("d-none");
        arrow.classList.remove("d-block");
       
      }
    });
  }
  
  arrow.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  });
  document.addEventListener("DOMContentLoaded", userScroll);
  