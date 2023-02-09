const nav = document.querySelector('.nav');
const logoBtn = document.querySelector('.logoButton');
const navWrappper = document.querySelector('.navWrapper')

logoBtn.addEventListener('click', openMenu);

function openMenu() {
    navWrappper.classList.toggle('open');
    logoBtn.classList.toggle('rotate');
}

const cookies = document.querySelector('.cookies');
const acceptBtn = document.querySelector('.acceptBtn');
const rejectBtn = document.querySelector('.rejectBtn');
const container5 = document.querySelector('.container5');

acceptBtn.addEventListener('click', closeCookies);
rejectBtn.addEventListener('click', closeCookies);


function closeCookies() {
    cookies.classList.toggle('none');
    container5.classList.toggle('none');
}