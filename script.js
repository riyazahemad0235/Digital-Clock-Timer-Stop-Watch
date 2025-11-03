let getLocation=document.body.querySelector(".getLocation")
let displayLocation=document.body.querySelector(".displayLocation")
let displayArea=document.body.querySelector(".displayArea")
let earth=document.body.querySelector(".earth")
let displayTime=document.body.querySelector(".displayTime")
getLocation.addEventListener("click",()=>{
    navigator.geolocation.getCurrentPosition(
        (pos)=>{
            let latitude=pos.coords.latitude;
            let longitude=pos.coords.longitude;
            displayLocation.innerText=`The latitude is ${latitude} & longtiude is ${longitude}]`;
            const timezone=Intl.DateTimeFormat().resolvedOptions().timeZone;
            displayArea.innerText=`Your local timezone is ${timezone}`;
            updateClock=()=>{
                displayTime.innerText=new Date().toLocaleTimeString();
            }
            setInterval(updateClock,1000)
            earth.classList.add("earthAnimation");
            displayTime.classList.add("displayTimeAnimation")
            displayLocation.classList.add("displayTimeAnimation")
            displayArea.classList.add("displayTimeAnimation")
            setTimeout(()=>{
                // earth.classList.remove("earthAnimation");
                displayTime.classList.remove("displayAnimationTime");
                displayLocation.classList.remove("displayAnimationLocation")
                displayArea.classList.remove("displayAnimationArea")
            },3000)
        },
        (err)=> console.log(err)
    )
})
