const label = document.querySelectorAll("label")
const input = document.querySelectorAll("input")
var login = document.getElementById("login")
var register = document.getElementById("register")
var select = document.getElementById("select")
var frame = document.getElementById("frame")
var btn = document.getElementById("btn")
var round = 0

input.forEach((each) => each.addEventListener("focus", () => {
    let labelNum = each.parentElement.querySelector("label")
    labelNum.classList.add("active")
}))
input.forEach((each) => each.addEventListener("blur", () => {
    let labelNum = each.parentElement.querySelector("label")
    if (each.value == "" || each.value == null){
        labelNum.classList.remove("active")
    } else {
        labelNum.classList.add("active")
    }
}))

login.addEventListener("click", () => {
    window.location.replace("login.html")
})
register.addEventListener("click", () => {
    window.location.replace("register.html")
})