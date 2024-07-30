function goHome(){
    location.href = 'home.html';
}
function showRegister(){
    let formLogin = document.getElementById('formLogin');
    let formRegister = document.getElementById('formRegister');
    if(formRegister.style.display =='none'){
        formRegister.style.display = 'block';
        formLogin.style.display = 'none';
    }
}
function showPassword(){
    let formLogin = document.getElementById('formLogin');
    let formEmail = document.getElementById('formEmail');

    if(formEmail.style.display =='none'){
        formEmail.style.display = 'block';
        formLogin.style.display = 'none';
    }
}
function goBack(){
    let formLogin = document.getElementById('formLogin');
    let formEmail = document.getElementById('formEmail');
    let formRegister = document.getElementById('formRegister');

    if(formEmail.style.display =='block'|| formRegister.style.display =='block' ){
        formEmail.style.display = 'none';
        formRegister.style.display = 'none';
        formLogin.style.display = 'block';
    }
}