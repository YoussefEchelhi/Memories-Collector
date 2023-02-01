const nav = document.querySelector('.nav');
const logoBtn = document.querySelector('.logoButton');

logoBtn.addEventListener('click', openMenu);

function openMenu() {
    nav.classList.toggle('open');
    logoBtn.classList.toggle('rotate');
}

const cookies = document.querySelector('.cookies');
const acceptBtn = document.querySelector('.acceptBtn');
const rejectBtn = document.querySelector('.rejectBtn');

acceptBtn.addEventListener('click', closeCookies);
rejectBtn.addEventListener('click', closeCookies);


function closeCookies() {
    cookies.classList.toggle('none');
}