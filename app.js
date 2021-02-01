var min = 0
var sec = 0
var miliSec = 0
var displayMin = document.getElementById('min')
var displaySec = document.getElementById('sec')
var displayMiliSec = document.getElementById('mili')
var interval;


function timer(){
    miliSec++
    displayMiliSec.innerHTML = miliSec
    if(miliSec == 100){
       sec++
       displaySec.innerHTML = sec
       miliSec = 0
    }else if(sec == 60){
        min++
        displayMin.innerHTML = min
        sec = 0
    }
}




function start(){
    interval = setInterval(timer,10)
    document.getElementById('start').style.display="none"
}
function pause(){
    clearInterval(interval)
    document.getElementById('start').style.display="inline-block"
}
function reset(){
    pause()
    miliSec = 0
    min = 0
    sec = 0
    displayMin.innerHTML = min
    displayMiliSec.innerHTML = miliSec
    displaySec.innerHTML = sec
}


