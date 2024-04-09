function register(){
    let userName = document.getElementById("user-name").value;
    let Password = document.getElementById("password").value;
    localStorage.setItem("USERNAME", userName );
    localStorage.setItem("PASSWORD", Password );
}

function log(){
    let userNameLog = document.getElementById("info-1").value;
    let PasswordLog = document.getElementById("info-2").value;
    let code1 = localStorage.getItem("USERNAME");
    let code2 = localStorage.getItem("PASSWORD");
    if(!userNameLog==code1){
        document.getElementById("error").innerHTML="wrong info"
    }
}
