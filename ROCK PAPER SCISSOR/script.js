let choice = ['rock','paper','scissor']
let user_score = 0
let computer_score = 0
let user_choice
let computer_choice

let u_s = document.getElementById('userscore')
let c_s = document.getElementById('computerscore')
let result = document.getElementById('result-box')


function rockChoice(e) {
    
    e.preventDefault()

    user_choice = 'rock'
    
    computer_choice = choice[Math.floor(Math.random() * choice.length)]

    if (user_choice === computer_choice)
    {
        result.innerHTML = "It's a TIE! 🤝" 
        result.style.background = "#3498db"      
    }
    else if (computer_choice === 'scissor'){
        user_score++
        u_s.innerHTML = "User Score : " + user_score
        result.innerHTML = "You Win! 🎉";
        result.style.background = "#2ecc71";
    }
    else{
        computer_score++
        c_s.innerHTML = "Computer Score : " + computer_score
        result.innerHTML = "Computer Wins! 💻";
        result.style.background = "#e74c3c";
    }
}

function paperChoice(e) {

    e.preventDefault()

    user_choice = 'paper'

    computer_choice = choice[Math.floor(Math.random() * choice.length)]

    if (user_choice === computer_choice){
        result.innerHTML = "It's a TIE! 🤝"
        result.style.background = "#3498db"
    }
    else if (computer_choice === 'rock'){
        user_score++
        u_s.innerHTML = "User Score : " + user_score
        result.innerHTML = "You Win! 🎉";
        result.style.background = "#2ecc71";
    }
    else{
        computer_score++
        c_s.innerHTML = "Computer Score : " + computer_score
        result.innerHTML = "Computer Wins! 💻";
        result.style.background = "#e74c3c";
    }
}

function scissorChoice(e) {

    e.preventDefault()

    user_choice = 'scissor'

    computer_choice = choice[Math.floor(Math.random() * choice.length)]

    if (user_choice === computer_choice){
        result.innerHTML = "It's a TIE! 🤝"
        result.style.background = "#3498db"
    }
    else if (computer_choice === 'paper'){
        user_score++
        u_s.innerHTML = "User Score : " + user_score
        result.innerHTML = "You Win! 🎉";
        result.style.background = "#2ecc71";
    }
    else{
        computer_score++
        c_s.innerHTML = "Computer Score : " + computer_score
        result.innerHTML = "Computer Wins! 💻";
        result.style.background = "#e74c3c";
    }
}

reset = () => {
    user_score = 0 
    computer_score = 0

    u_s.innerHTML = "User Score : 0"
    c_s.innerHTML = "Computer Score : 0"
    result.innerHTML = "Game Reset! Start Again.";
    result.style.background = "#9b59b6";
}