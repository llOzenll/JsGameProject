
//highScore
let highScore = localStorage.getItem('highscore');
function hscore(){
    let scoreNumber = document.getElementById('scoreNumber');
    if(highScore > 0) scoreNumber.innerHTML = highScore;
    else{scoreNumber.innerHTML = 0;}
}


//play
function goPlay(){
    location.href = 'game.html';
}

//menuSkins
function openSkins(){
    let boton=document.getElementById("skinButton");
    if(boton.textContent=="back"){
        boton.textContent="skins";
    }else if(boton.textContent="skins"){
        boton.textContent="back";
    }
    let canvasSkins = document.getElementById('skinMenu');
    if(canvasSkins.style.display =='none') canvasSkins.style.display = 'block';
    else{canvasSkins.style.display = 'none'}
}

//skins
let s = document.getElementsByClassName('s');
let skin = localStorage.getItem('skin');

function skins(){
    for(let i=0; i<s.length;i++){
        if(skin>0) s[skin].classList.add('s1');
        else s[0].classList.add('s1');
            
        if(i==0){
            s[0].addEventListener('mousedown',(e) =>{
                reset();
                e.target.classList.add('s1');

                skin = 0;
                localStorage.setItem('skin', skin);

            });
        }


        if(highScore >= 30){
            
            s[1].addEventListener('mousedown',(e) =>{
                reset();
                e.target.classList.add('s1');

                skin = 1;
                localStorage.setItem('skin', skin);

            });
        }else{
            s[1].addEventListener('mousedown',(e) =>{
                setTimeout(() => {
                    reset();
                    e.target.classList.add('s2');
                }, 50);
                setTimeout(() => {
                    reset();
                    e.target.classList.add('s');
                }, 290);
            });
        }



        if(highScore >= 60){
            s[2].addEventListener('mousedown',(e) =>{
                reset();
                e.target.classList.add('s1');

                skin = 2;
                localStorage.setItem('skin', skin);

                let skins = document.getElementById('skin3');

            });
        }else{
            s[2].addEventListener('mousedown',(e) =>{
                setTimeout(() => {
                    reset();
                    e.target.classList.add('s2');
                }, 50);
                setTimeout(() => {
                    reset();
                    e.target.classList.add('s');
                }, 290);
            });
        }



        if(highScore >= 120){
            s[3].addEventListener('mousedown',(e) =>{
                reset();
                e.target.classList.add('s1');

                skin = 3;
                localStorage.setItem('skin', skin);

                let skins = document.getElementById('skin4');

            });
        }else{
            s[3].addEventListener('mousedown',(e) =>{
                setTimeout(() => {
                    reset();
                    e.target.classList.add('s2');
                }, 50);
                setTimeout(() => {
                    reset();
                    e.target.classList.add('s');
                }, 290);
            });
        }
        


        if(highScore >= 180){
            s[3].addEventListener('mousedown',(e) =>{
                reset();
                e.target.classList.add('s1');

                skin = 4;
                localStorage.setItem('skin', skin);

                let skins = document.getElementById('skin5');

            });
        }else{
            s[4].addEventListener('mousedown',(e) =>{
                setTimeout(() => {
                    reset();
                    e.target.classList.add('s2');
                }, 50);
                setTimeout(() => {
                    reset();
                    e.target.classList.add('s');
                }, 290);
            });
        }



        if(highScore >= 240){
            s[5].addEventListener('mousedown',(e) =>{
                reset();
                e.target.classList.add('s1');

                skin = 5;
                localStorage.setItem('skin', skin);

                let skins = document.getElementById('skin6');

            });
        }else{
            s[5].addEventListener('mousedown',(e) =>{
                setTimeout(() => {
                    reset();
                    e.target.classList.add('s2');
                }, 50);
                setTimeout(() => {
                    reset();
                    e.target.classList.add('s');
                }, 290);
            });
        }
    }

}
function reset(){
    for(let i=0; i<s.length;i++){
        s[i].classList.remove('s1');
        s[i].classList.remove('s2');
    }
}

//verify
function verify(){
    fetch('/proyecto/backend/home.php', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.loggedIn) {
            console.log('User is logged in:', data.name);
            let name = document.getElementById('name');
            name.innerHTML = data.name;
        } else {
            console.log('User is not logged in');
            window.location.href = "/proyecto/index.php";
        }
    })
    .catch((error) => {
        console.log(error);
    });
}

//start
window.addEventListener('load', start);
function start(){
    verify()
    skins();
    hscore();
}