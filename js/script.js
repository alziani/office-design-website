const navbar = document.querySelector(".navbar");
const arrow = document.querySelector(".nar");

const customer = document.getElementById("customer");
const solved = document.getElementById("solved");
const reviews = document.getElementById("reviews");
const studies = document.getElementById("studies");


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
  

  let coun = document.querySelectorAll(".counters");

window.addEventListener("load", () => {


    coun.forEach(e => {
        e.innerText = 0;

        let gaol = e.dataset.target;
        let increment = gaol / 100

        let count = setInterval(() => {

            e.textContent = Math.ceil(+e.textContent + increment);
           
            if (e.textContent == gaol) {
                clearInterval(count)
            }
        }, 20)
    })
});