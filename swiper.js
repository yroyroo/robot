const header = document.querySelector('.header');
let scrollingDown = false;

window.addEventListener('scroll', function() {
  const scrollY = window.scrollY;

  if (scrollY > 0 && !scrollingDown) {
    header.classList.add('swipe-down');
    scrollingDown = true;
  } else if (scrollY === 0 && scrollingDown) {
    header.classList.remove('swipe-down');
    scrollingDown = false;
  }
});





var swiper = new Swiper('.presentation', {
    slidesPerView: 1,
    spaceBetween: 55,
    loop: true,
    fade: true,
    grabCursor: true,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
    },
    pagination: {
        el: '.swiper-pagination'
    }
});





const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', function () {
  navList.classList.toggle('active');
});

// Select all the navigation links
const navLinks = document.querySelectorAll(".nav-list a");

// Add an event listener to each link to close the menu when clicked
navLinks.forEach(link => {
  link.addEventListener("click", function () {
    navList.classList.remove('active');
  });
});
