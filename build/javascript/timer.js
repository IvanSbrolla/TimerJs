let segundos = 0;
let minutos = 0;
let horas = 0;
let interval;
const btnStart = document.getElementById('btnStart');
const btnStop = document.getElementById('btnStop');
const btnReset = document.getElementById('btnReset');
const txtTimer = document.getElementById('txtTimer');

btnStart.onclick = (e) => {
    startTimer()
}
btnStop.onclick = (e) => {
    stopTimer()
}
btnReset.onclick = (e) => {
    resetTimer()
}
function startTimer() {
    clearInterval(interval)
    interval = setInterval(timer, 1000);
    return interval
}
function stopTimer() {
    clearInterval(interval)
}
function resetTimer() {
    stopTimer();
    segundos = 0;
    minutos = 0;
    horas = 0;
    return txtTimer.innerHTML = getTimerString()
}
function timer() {
    segundos++
    if (segundos == 60) {
        segundos = 0
        minutos++
    }
    if (minutos == 60) {
        minutos = 0
        horas++
    }
    return txtTimer.innerHTML = getTimerString();
}
function getTimerString() {
    if (horas.toString().length < 2) {
        horas = `0${horas}`
    }
    if (minutos.toString().length < 2) {
        minutos = `0${minutos}`
    }
    if (segundos.toString().length < 2) {
        segundos = `0${segundos}`
    }
    return `${horas}:${minutos}:${segundos}`
}
