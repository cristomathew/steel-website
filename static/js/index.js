let menuBtn = document.querySelector(".navbar .menu-btn");
let menu = document.querySelector(".navbar .menu");
let menuOpen = false;

menuBtn.addEventListener('click', ()=>{
    if(menuOpen===false){
        menuBtn.querySelector('i').classList.replace("fa-bars","fa-times");
        menu.style.left = "0";
        menuOpen=true;
    }
    else
    {
        menuBtn.querySelector('i').classList.replace("fa-times","fa-bars");
        menu.style.left = "-100%";
        menuOpen=false;
    }
});


// dropdown footer

let designCard = document.querySelectorAll("footer .container .design");


for(let i=0; i<designCard.length; i++){

  let current = designCard[i].querySelector(".expand-btn");
  let toggle = false;
  let designItems = designCard[i].querySelectorAll(".items");
  current.addEventListener('click',()=>{
    if(!toggle){
      designItems.forEach(item => item.style.display="block");
      current.style.transform = "translate(-50%,10%) rotate(180deg)";
    }
    else{
      designItems.forEach(item => item.style.display="none");
      current.style.transform = "translate(-50%,10%) rotate(0deg)";
    }
    toggle=!toggle;
  });
}

// swiper

const swiper = new Swiper(".swiper", {
  loop: true,
  speed: 2000,
  spaceBetween: 0,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});