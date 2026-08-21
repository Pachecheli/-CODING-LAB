const daysElement = document.getElementById("days")
const timeElement = document.getElementById("time")

const goalDate = new Date("2026-10-20T00:00:00")
let intervalId

function CountDown(){
    const now = new Date();
    const difference = goalDate - now

    const days = Math.floor(difference/86400000)
    let rest = difference % 86400000

    const hrs = Math.floor(rest/3600000)
    rest = rest % 3600000
    const mins = Math.floor(rest/60000)
    rest = rest % 60000
    const secs = Math.floor(rest/1000)

    daysElement.textContent = days
    timeElement.textContent = `${hrs.toString().padStart(2,"0")}:${mins.toString().padStart(2,"0")}:${secs.toString().padStart(2,"0")}`


    if(difference <= 0) {
        clearInterval(intervalId);
        console.log("Goal cleared!");
    }
}

intervalId = setInterval(CountDown, 1000)

 