let minutes=document.body.querySelector(".minutes");
let seconds=document.body.querySelector(".seconds");
let milliSec=document.body.querySelector(".milliSec");
let lapsList=document.body.querySelector(".lapsList")
let addLaps=document.body.querySelector("#addLaps")
let startTimer=document.body.querySelector("#startTimer");
let stopTimer=document.body.querySelector("#stopTimer");
let resetTimer=document.body.querySelector("#resetTimer");
let stopWatchInterval=null
let timerInterval=null



startTimer.addEventListener("click",()=>{
    if(!timerInterval){
        timerInterval=setInterval(() => {
        let milli = parseInt(milliSec.innerText)
        let sec = parseInt(seconds.innerText)
        let min = parseInt(minutes.innerText)
        milli+=10;
        if(milli>=1000){
            sec++;
            milli=0;
            if(sec>=60){
                min++;
                sec=0;
            }
        }
        milliSec.innerText=(milli).toString().padStart(3,"0");
        seconds.innerText=(sec).toString().padStart(2,"0");
        minutes.innerText=(min).toString().padStart(2,"0");
        }, 10);
    
    }
})
pauseTimer.addEventListener("click",()=>{
    clearInterval(timerInterval);
    timerInterval=null;
    alert("Timer is paused")
    
})
addLaps.addEventListener("click",()=>{
    const li =document.createElement("li")
    const span=document.createElement("span")
    li.classList.add("list")
    span.classList.add("laps")
    span.innerText=`${minutes.innerText} : ${seconds.innerText} : ${milliSec.innerText}`
    li.append(span);
    lapsList.appendChild(li)
})
resetTimer.addEventListener("click",()=>{
    clearInterval(timerInterval);
    timerInterval=null;
    milliSec.innerText="000";
    seconds.innerText="00";
    minutes.innerText="00";
    alert("The stopWatch is Rest")
    lapsList.innerHTML=""
    
})


