
const registerScreen = document.querySelector(".register");
const Thanks = document.querySelector(".thanks");
const accountSection = document.querySelector(".account");

function register(){
    let userName = document.getElementById("user-name").value;
    let Password = document.getElementById("password").value;
    localStorage.setItem("USERNAME", userName );
    localStorage.setItem("PASSWORD", Password );
    if(!registerScreen.classList.contains("not-Active")){
    registerScreen.classList.add("not-Active")}
    if(Thanks.classList.contains("not-Active")){
        Thanks.classList.remove("not-Active")
    }
}

function log(){
    let userNameLog = document.getElementById("info-1").value;
    let PasswordLog = document.getElementById("info-2").value;
    if(accountSection.classList.contains("not-Active")){
        accountSection.classList.remove("not-Active")
    }
    if(!registerScreen.classList.contains("not-Active")){
        registerScreen.classList.add("not-Active")
    }
    document.getElementById("Welcome").innerHTML="Welcome back " + localStorage.getItem("USERNAME");
    
}