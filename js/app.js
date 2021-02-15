/*******************************************************************************
 *              app.js
 *      Author: Saleh Mahmoud (https://github.com/salehmahmoud594)
 *  Created on: Feb 15,2021
 *     Project: landing-page
 *******************************************************************************/

// Define Global Variables

let sections = document.querySelectorAll('section');
let nav = document.querySelector(".navbar__menu");
let ul = document.querySelector("#navbar__list");
let pos = [];


nav.classList.add("navbar", "navbar-expand-lg", "navbar-dark", "bg-dark");
ul.classList.add("navbar-nav", "me-auto", "mb-2", "mb-lg-0");


// build the nav

for (let num = 1; num <= sections.length; num++) {
  ul.innerHTML += `
                  <li class="nav-item">
                  <a class="nav-link" href="#section${num}">Section ${num}</a>
                  </li> `;
}

// Helper Functions
for (let num = 1; num <= sections.length; num++) {
  pos[num - 1] = sections[num - 1].offsetTop;
}


let lastScrollPosition = 0;
let activeStatus = false;
let a = document.querySelectorAll('a');

// Add class 'active' to section when near top of viewport
// Set sections as active

function doActive(scroll_pos) {
  for (let num = 1; num <= sections.length; num++) {
    if (window.scrollY >= pos[num - 1] - 50 && window.scrollY <= pos[num - 1] + 500) {
      sections[num - 1].classList.add('your-active-class');
      a[num - 1].classList.add("active");
    } else {
      sections[num - 1].classList.remove('your-active-class');
      a[num - 1].classList.remove("active");
    }
  }
}

// Scroll to anchor ID using scrollTO event

document.addEventListener('scroll', function (e) {
  lastScrollPosition = window.scrollY;
  if (!activeStatus) {
    window.requestAnimationFrame(function () {
      doActive(lastScrollPosition);
      activeStatus = false;
    });
    activeStatus = true;
  }
});


for (let num = 1; num <= sections.length; num++) {
  a[num - 1].addEventListener('click', function (e) {
    a[num - 1].scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  });
}
