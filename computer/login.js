function registration_div() {
    var registration_elements = document.getElementsByClassName("registration");
    var login_elements = document.getElementsByClassName("login");
    for (var i = 0; i < registration_elements.length; i++) {
        registration_elements[i].style.visibility = "visible";
        registration_elements[i].style.position = "relative";
    };
    for (var i = 0; i < login_elements.length; i++) {
        login_elements[i].style.visibility = "hidden";
        login_elements[i].style.position = "absolute";
    };
    document.getElementById("password_form_registration").style.position = "absolute";
};
function login_div() {
    var registration_elements = document.getElementsByClassName("registration");
    var login_elements = document.getElementsByClassName("login");
    for (var i = 0; i < registration_elements.length; i++) {
        registration_elements[i].style.visibility = "hidden";
        registration_elements[i].style.position = "absolute";
    };
    for (var i = 0; i < login_elements.length; i++) {
        login_elements[i].style.visibility = "visible";
        login_elements[i].style.position = "relative";
    };
    document.getElementById("password_form_login").style.position = "absolute";
};