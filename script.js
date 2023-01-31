
let checkbox=document.querySelector('#checkbtn');
let navbar=document.querySelector('.navbar');

checkbox.onclick = () =>{
  checkbox.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  checkbox.classList.remove('fa-times');
  navbar.classList.remove('active');
}



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  

  
  var swiper = new Swiper(".review-slider", {
      effect: "flip",
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
