const DAYS = 1000 * 24 * 60 * 60;
const HPD = DAYS;
const MPD = 1000;

const birthDay = new Date('2021-11-10');
var timer = document.querySelector('.timer');
var counter = document.querySelector('.counter');
var mainPage = document.querySelector('.main');
mainPage.style.display = 'none';
const dayDiff = () => {
  var diff = birthDay - new Date();
  const days = Math.floor(diff / DAYS);
  const hours = Math.floor(diff / HPD);
  console.log(days, hours);
};
var tmr = setInterval(() => {
  const time = new Date().getSeconds();
  dayDiff();
  timer.innerHTML = time;
  if (time === 30) {
    counter.style.display = 'none';
    mainPage.style.display = 'flex';
    return clearInterval(tmr);
  }
}, 1000);
