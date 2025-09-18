function getTime(){
    let date = new Date()

    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    let hour = document.getElementById("hour")
    let min = document.getElementById("min")
    let sec = document.getElementById("sec")

    hour.innerHTML = hours < 10 ? "0"+hours : hours
    min.innerHTML = minutes < 10 ? "0"+minutes : minutes
    sec.innerHTML = seconds < 10 ? "0"+seconds : seconds

    setInterval(getTime,1000)
}

getTime()