'use strict';


// Toggle navbar
const bar1 = document.getElementById('bar-1');
const bar2 = document.getElementById('bar-2');
const bar3 = document.getElementById('bar-3');

const mobileNav = document.getElementById('mobile-nav');


const handleHamburger = () => {
    bar1.classList.toggle('rotate-clockwise');
    bar2.classList.toggle('remove-second-bar');
    bar3.classList.toggle('rotate-anticlockwise');
    mobileNav.classList.toggle('slide-out');
}

const hideMenu = () => {
    bar1.classList.remove('rotate-clockwise');
    bar2.classList.remove('remove-second-bar');
    bar3.classList.remove('rotate-anticlockwise');
    mobileNav.classList.remove('slide-out');
}


const handleDropdownMenu = () => {
    const productMenu = document.getElementById('product-dropdown');
    productMenu.classList.toggle('is-active');
    console.log(productMenu);

    const productIcon = document.getElementById('product-icon');
    productIcon.classList.toggle('rotate-up');
}

const hideDropdown = () => {
    const productMenu = document.getElementById('product-dropdown');
    productMenu.classList.remove('is-active');

    const productIcon = document.getElementById('product-icon');
    productIcon.classList.remove('rotate-up');
}