console.log("i am working");

document.getElementById("login-btn").addEventListener("click", function logpage() {

    
    const userNameInput = document.getElementById("userName");
    const username = userNameInput.value;
    console.log(username);
    

    const passKeyInput = document.getElementById("pass-Word");
    const password = passKeyInput.value;
    console.log(password);
    
    if(username == "admin" && password == "admin123"){
        alert("login sucessful");
        window.location.assign("home.html")

    }
    
    else{
        alert("login failed");
        return
    }
})
