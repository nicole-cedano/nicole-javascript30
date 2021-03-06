// global variable
const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')


function setDate(){
    const now = new Date()

    // getting seconds
    const seconds = now.getSeconds()
    const secondsDegrees = ((seconds / 60 ) * 360) + 90
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
    //getting minutes
    const minutes = now.getMinutes()
    const minutesDegrees = (( minutes / 60) * 360) + 90
    minHand.style.transform = `rotate(${minutesDegrees}deg)`
    //getting hours
    const hour = now.getHours()
    const hourDegrees = ((hour / 12) * 360) + 90
    hourHand.style.transform = `rotate(${hourDegrees}deg)`

    //display date and time on DOM
    const date = new Date()
    const nowDate = date.toDateString()
    const time = date.toLocaleTimeString()
    document.getElementById("time").innerHTML = `${nowDate} ${time}`
}


setInterval(setDate, 1000);



