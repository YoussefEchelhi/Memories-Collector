const nav = document.querySelector('.nav');
const logoBtn = document.querySelector('.logoButton');
const navWrappper = document.querySelector('.navWrapper')
const cookies = document.querySelector('.cookies');
const acceptBtn = document.querySelector('.acceptBtn');
const rejectBtn = document.querySelector('.rejectBtn');
const container4 = document.querySelector('.container4');

logoBtn.addEventListener('click', openMenu);
acceptBtn.addEventListener('click', closeCookies);
rejectBtn.addEventListener('click', closeCookies);

function openMenu() {
    navWrappper.classList.toggle('open');
    logoBtn.classList.toggle('rotate');
}

function closeCookies() {
    cookies.classList.toggle('none');
    container4.classList.toggle('none');
}