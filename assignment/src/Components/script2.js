const modal = document.querySelectorAll(".modal");
const overlay = document.querySelectorAll(".overlay");

let openModal = ()=>{
    console.log("modal is open");
    modal[0].classList.add("active");
    overlay[0].classList.add("overlayactive");
};

let closeModal = ()=>{
    console.log("modal is close");
    modal[0].classList.remove("active");
    overlay[0].classList.remove("overlayactive");
};

let openModal2 = ()=>{
    console.log("modal is open");
    modal[1].classList.add("active");
    overlay[1].classList.add("overlayactive");
};

let closeModal2 = ()=>{
    console.log("modal is close");
    modal[1].classList.remove("active");
    overlay[1].classList.remove("overlayactive");
};

let openModal3 = ()=>{
    console.log("modal is open");
    modal[2].classList.add("active");
    overlay[2].classList.add("overlayactive");
};

let closeModal3 = ()=>{
    console.log("modal is close");
    modal[2].classList.remove("active");
    overlay[2].classList.remove("overlayactive");
};


let openModal4 = ()=>{
    console.log("modal is open");
    modal[3].classList.add("active");
    overlay[3].classList.add("overlayactive");
};

let closeModal4 = ()=>{
    console.log("modal is close");
    modal[3].classList.remove("active");
    overlay[3].classList.remove("overlayactive");
};


let heroEnd = document.querySelector(".campussection");
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
