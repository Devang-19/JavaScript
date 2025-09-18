let h = 0   // Hour
let m = 0   // Min
let s = 0   // Sec
let x = 0

let hour = document.getElementById("hour")
let min = document.getElementById("min")
let sec = document.getElementById("sec")

const start2 = () => {
    s++
    // console.log(s)
    if (s == 60)
    {
        s = 0
        m++
    }else if (m == 60){
        m = 0
        h++
    }

    hour.innerHTML = h < 10 ? "0"+h : h
    min.innerHTML = m < 10 ? "0"+m : m
    sec.innerHTML = s < 10 ? "0"+s : s

}

const start = () => {
    x = setInterval(() => {
        start2()
    },1000)
}       

const stop = () => {
    clearInterval(x)
}

const reset = () => {
    h = 0
    m = 0
    s = 0

    hour.innerHTML = h < 10 ? "0"+h : h
    min.innerHTML = m < 10 ? "0"+m : m
    sec.innerHTML = s < 10 ? "0"+s : s

    clearInterval(x)
}