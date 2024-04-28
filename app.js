
const registerScreen = document.querySelector(".register");
const Thanks = document.querySelector(".thanks");
const accountSection = document.querySelector(".account");
const color_list = document.querySelector(".color-options");
const color_button=document.querySelector(".color-button");
const color_close_button=document.querySelector(".close-color-button");


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

const log_info = localStorage.getItem("USERNAME");
const log_info_2 = localStorage.getItem("PASSWORD");

function log(){
    let userNameLog = document.getElementById("info-1").value;
    let PasswordLog = document.getElementById("info-2").value;
    if(!log_info == userNameLog || !log_info_2==PasswordLog){
        document.getElementById("error").innerHTML="error";
    } else if(log_info == userNameLog && log_info_2==PasswordLog){
    if(accountSection.classList.contains("not-Active")){
        accountSection.classList.remove("not-Active")
    }
    if(!registerScreen.classList.contains("not-Active")){
        registerScreen.classList.add("not-Active")
    }
    document.getElementById("Welcome").innerHTML="Welcome back " + localStorage.getItem("USERNAME");}
    
}

function paste(){

    let content = document.getElementById("clip-board");    
    let pasteContent = document.getElementById("text-input").value;
    content.innerHTML += pasteContent + "<br>";
}




function WhiteBlue(){
    document.getElementById("header-color").style.backgroundImage="linear-gradient(rgb(43, 149, 181), rgb(120, 208, 255))";
    document.getElementById("settings-color").style.backgroundColor="rgb(43, 149, 181)";
}

function whiteGreen(){
    document.getElementById("header-color").style.backgroundImage="linear-gradient(rgb(50, 193, 59), rgb(82, 207, 149))";
    document.getElementById("settings-color").style.backgroundColor="rgb(50, 193, 59)";
}

function white_red(){
    document.getElementById("header-color").style.backgroundImage="linear-gradient(rgb(219, 66, 66), rgb(208, 114, 116))"
    document.getElementById("settings-color").style.backgroundColor="rgb(219, 66, 66)";
}

function reveal(){
    if(color_list.classList.contains("not-Active")){
        color_list.classList.remove("not-Active");
    }
    if(!color_button.classList.contains("not_Active")){
        color_button.classList.add("not-Active")
    }
    if(color_close_button.classList.contains("not-Active")){
        color_close_button.classList.remove("not-Active")
    }
    
}
function hide(){
    if(!color_list.classList.contains("not-Active")){
        color_list.classList.add("not-Active");
    }
    if(!color_close_button.classList.contains("not_Active")){
        color_close_button.classList.add("not-Active")
    }
    if(color_button.classList.contains("not-Active")){
        color_button.classList.remove("not-Active")
    }    
}

function save(){
    let text_content = document.getElementById("clip-board").innerHTML;
    localStorage.setItem("saved_text", text_content);
    document.getElementById("note").innerHTML="All content has been saved";
}