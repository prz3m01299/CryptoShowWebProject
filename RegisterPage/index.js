console.log("register.js");
document.addEventListener("DOMContentLoaded", function () {

    /*----------------------------------------
    
                    Selectors

     ----------------------------------------*/

    let passwordIcon = document.getElementById("passwordIcon");
    let password = document.getElementById("passwordInput");


    /*----------------------------------------
    
                Defining functions

     ----------------------------------------*/

    function handleShowPassword() {
        if (password.type === "password") {
            password.type = "text";
        } else {
            password.type = "password";
        }
    }


    /*----------------------------------------
    
            Attaching even listeners

     ----------------------------------------*/

    passwordIcon.addEventListener("click", () => {
        handleShowPassword();
    });


});