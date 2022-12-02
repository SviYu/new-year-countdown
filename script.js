const currentYear = new Date().getFullYear();
const currentDate = new Date().getDate();

const audio = document.getElementById('audio');
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');

const NewYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);
document.getElementById('year').innerHTML = currentYear + 1 + " by Me";
document.getElementById('currentYear').innerHTML = currentYear + 1;

function play() {
    audio.play();
    audio.loop = true;
    console.log('play')
}
function pause() {
    audio.pause();
    console.log('pause')
}

function updateCountdown() {
    const currentTime = new Date();
    diff = NewYearTime - currentTime;
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;
    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
}

setInterval(updateCountdown, 1000)