let heroEnd = document.querySelector(".accredition");
let y = heroEnd.offsetTop;
console.log(y);
let navHeight = document.querySelector(".navbar");
let x = navHeight.offsetHeight;
console.log(x);

window.addEventListener("scroll", () => {
  if (window.scrollY > y - x ) 
  {
    navHeight.classList.add("activeBar");
  }
   else
   
   {
    navHeight.classList.remove("activeBar");
  }
});
