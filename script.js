const seconds = 1000;
const minutes = seconds * 60;
const hours = minutes * 60;
const days = hours * 24;

const birthDay = new Date('Nov 10, 2021 00:00:00').getTime();
var timer = document.querySelector('.timer');
var counter = document.querySelector('.counter');
var mainPage = document.querySelector('.main');
mainPage.style.display = 'none';
var tmr = setInterval(() => {
  let now = new Date().getTime();
  const difference = birthDay - now;
  timer.innerHTML = ` ${Math.floor((difference % days) / hours)} : ${Math.floor((difference % hours) / minutes) } : ${Math.floor((difference % minutes) / seconds) } `;
  if (difference <= 0) {
    counter.style.display = 'none';
    mainPage.style.display = 'flex';
    return clearInterval(tmr);
  }
}, 1000);
