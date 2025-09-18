document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signupForm")
    const loginForm = document.getElementById("loginForm")
    const otpForm = document.getElementById("otpForm")

    // ------------------ SIGN UP ------------------
    if (signupForm) {
        signupForm.addEventListener("submit", (e) => {
            e.preventDefault()

            let name = document.getElementById("name").value
            let email = document.getElementById("email").value
            let password = document.getElementById("password").value
            let confirmPassword = document.getElementById("confirmPassword").value

            if (password !== confirmPassword) {
                alert("Password Do not Match !")
                return
            }

            // Save correctly
            localStorage.setItem("name", name)
            localStorage.setItem("email", email)
            localStorage.setItem("password", password)

            alert("Your Account Created Successfully ! Please Login.")
            window.location.href = "login.html"
        })
    }

    // ------------------ LOGIN ------------------
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault()

            let email = document.getElementById("email").value
            let password = document.getElementById("password").value

            let localStorageEmail = localStorage.getItem("email")
            let localStoragePassword = localStorage.getItem("password")
            let localStorageName = localStorage.getItem("name")

            if (email === localStorageEmail && password === localStoragePassword) {
                let otp = Math.floor(100000 + Math.random() * 900000)

                localStorage.setItem("otp", otp)

                let serviceId = "SERIVCE_ID"
                let templateId = "TEMPLATE_ID"

                emailjs.send(serviceId, templateId, {
                    name: localStorageName,
                    email: email,
                    otp: otp
                }).then(() => {
                    alert("OTP Sent Successfully to Your Email.")
                    window.location.href = "otp_page.html"
                }).catch((err) => {
                    console.error(err)
                    alert("Error Sending OTP. Check Console.")
                })
            } else {
                alert("Invalid Email or Password !")
            }
        })
    }

    // ------------------ OTP VERIFICATION ------------------
    if (otpForm) {
        otpForm.addEventListener("submit", (e) => {
            e.preventDefault()

            let otp = document.getElementById("otp").value
            let localStorageOtp = localStorage.getItem("otp")

            if (localStorageOtp === otp) {
                alert("OTP Verified Successfully.")
            } else {
                alert("Invalid OTP !!!")
            }
        })
    }
})