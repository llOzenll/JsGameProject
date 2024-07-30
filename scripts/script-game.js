class obj{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
}

//objects
let player = new obj(100, 500, 200, 130);

let array = [];

let ground = new obj(0, 489, 1500, 140);

let clouds = new obj(-150, -10, 1500, 170);
let clouds1 = new obj(1000, -10, 1500, 170);


//skins
let imgPlayer0 = new Image();
imgPlayer0.src = '/proyecto/images/circle.png';

let imgPlayer1 = new Image();
imgPlayer1.src = '/proyecto/images/circle.png';

let imgPlayer2 = new Image();
imgPlayer2.src = '/proyecto/images/circle.png';

let imgPlayer3 = new Image();
imgPlayer3.src = '/proyecto/images/circle.png';

let imgPlayer4 = new Image();
imgPlayer4.src = '/proyecto/images/circle.png';

let imgPlayer5 = new Image();
imgPlayer5.src = '/proyecto/images/circle.png';

//images
let imgpinchos = new Image();
imgpinchos.src = '/proyecto/images/pinchos.png';

let imgGround = new Image();
imgGround.src = '/proyecto/images/ground.png';

let imgClouds = new Image();
imgClouds.src = '/proyecto/images/clouds.png';
let imgClouds1 = new Image();
imgClouds1.src = '/proyecto/images/clouds.png';


//menu
let menu = document.getElementById('menu');
let pause = true;

//pichos
let randomNumber = 30;

//death
let d = 'v';

//speed
let time = 5;
let e = -1;

//score
let skin = localStorage.getItem('skin');
let dataScore;
let highScoreData = localStorage.getItem('highscore');
let hScore = highScoreData;
let newScore = document.getElementById('newScore');


//jumpPlayer && keysPressed
setTimeout(window.addEventListener('keypress', jump), 1000);

window.addEventListener('keypress', jump);
function jump(e){
    if(player.y > 475){
        if(e.key === ' ' || e.code === 'Space'  || e.keycode === 32){

            menu.style.display = 'none';
            if(pause == false){
                ani();
                setTimeout(ani1, 230);
            }
            if(pause == true){
                pause = false;
                redraw();
                wordScore = false;
            }
        }
    }
    //open menu
    if(e.key === 'm' || e.code === 'KeyM'  || e.keycode === 77){
        menu.style.display = 'block';
        pause = true;
    }
}

// back to home
setTimeout(window.addEventListener('keydown', function back(e){
    if(e.key === 'Backspace'){
        if(pause == true){
            const data=new FormData();
            data.append("score",highScoreData);
            
            fetch('/proyecto/backend/saveScore.php', {
                method: 'POST',
                body: data
            })
            .then(response => {
                response.text()
                location.href = 'home.html';
            })
            .catch(error => { console.error('Error:', error);});
        }
    }
}), 1000);



//pinchos
function pi(){
    let random =  Math.floor(Math.random() * 100);
    if(random < randomNumber){
        var pinchos = new obj(1550, 495, 200, 110);
        array.push(pinchos);
    }  
}
setInterval(pi, 500);



//draw
function draw(ctx){
    //draw background
    let gradient = ctx.createLinearGradient(0,0,0,canvas.height);
    gradient.addColorStop(0,'#99D9EA');
    gradient.addColorStop(1,'#99D9EA');
    ctx.fillStyle = gradient;
    ctx.fillRect(0,0,canvas.width,canvas.height);

    //draw Player && Skins
    switch(skin){
        case 0:
            ctx.drawImage(imgPlayer0, player.x, player.y, player.w, player.h);
        break;

        case 1:
            ctx.drawImage(imgPlayer0, player.x, player.y, player.w, player.h);
        break;

        case 2:
            ctx.drawImage(imgPlayer0, player.x, player.y, player.w, player.h);
        break;

        case 3:
            ctx.drawImage(imgPlayer0, player.x, player.y, player.w, player.h);
        break;

        case 4:
            ctx.drawImage(imgPlayer0, player.x, player.y, player.w, player.h);
        break;

        case 5:
            ctx.drawImage(imgPlayer0, player.x, player.y, player.w, player.h);
        break;
        default:
            ctx.drawImage(imgPlayer0, player.x, player.y, player.w, player.h);
    }

    //draw Clouds
    ctx.drawImage(imgClouds, clouds.x, clouds.y, clouds.w, clouds.h);
    ctx.drawImage(imgClouds1, clouds1.x, clouds1.y, clouds1.w, clouds1.h);
    //draw Ground
    ctx.drawImage(imgGround, ground.x, ground.y, ground.w, ground.h);
    //draw Pinchos
    for(let i=0; i<array.length; i++){
        ctx.drawImage(imgpinchos, array[i].x, array[i].y, array[i].w, array[i].h);
    }
    //delete Pinchos
    if(array.length > 0){
        if(array[0].x < -200)array.shift();
    }
    //limit Clouds
    if(clouds.x < -1400) clouds.x = 1400;
    if(clouds1.x < -1400) clouds1.x = 1400;
}

function redraw(){
    if(pause == false){
        requestAnimationFrame(redraw);
        draw(ctx);
        speed();
        death();
    }
}


//death
function death(){
    for(let i = 0; i < array.length; i++){
        if(player.x > array[i].x - 35 && player.x < array[i].x + 25 && player.y > array[i].y && player.y < array[i].y + array[i].h){
            menu.style.display = 'block';
            array = [];
            time = 5;
            e = -1;
            pause = true;
            highScore();
        }
    }
}



//speed
function speed(){
    for(let i = 0; i<array.length; i++){
        array[i].x-=time;
    }

    if(e >= 15 && e <= 30){
        clouds.x-=time;
        clouds1.x-=time;
        randomNumber = 50;
    }else if(e > 30 && e <= 60){
        clouds.x-=time;
        clouds1.x-=time;
        randomNumber = 60;
    }else if(e > 60 && e <= 90){
        clouds.x-=time;
        clouds1.x-=time;
        randomNumber = 70;
    }else if(e > 90 && e <= 120){
        clouds.x-=time;
        clouds1.x-=time;
        randomNumber = 80;
    }else if(e > 120 && e <= 150){
        clouds.x-=time;
        clouds1.x-=time;
        randomNumber = 90;
    }else if(e > 150){
        clouds.x-=time;
        clouds1.x-=time;
        randomNumber = 100;
    }else{
        clouds.x--;
        clouds1.x--;
        randomNumber = 30;
    }
}



//score
function score(){
    if(pause == false){
        dataScore = e+=1;
        let score0 = document.getElementById('score');
        score0.innerHTML = 'score: ' + (dataScore);
        time += 0.2;
    }
}
setInterval(score, 1000);


//high Score
function highScore(){
    if(dataScore > hScore){
        hScore = dataScore;
        newScore.innerHTML = 'High Score: ' + (hScore);

        localStorage.setItem('highscore', hScore);
        
    }else{
        newScore.innerHTML = 'High Score: ' + (hScore);
    }
}



//animation
//up
function ani(){
    setInterval(frame, 5);
    let num = 0;
    function frame(){
        if(num == 30){
            clearInterval(frame);
        }
        else{
            num++;
            player.y -=5.2;
        }
    }
}
//down
function ani1(){
    setInterval(frame, 5);
    let num = 0;
    function frame(){
        if(num == 30){
            clearInterval(frame);
        }
        else{
            num++;
            player.y += 5.2;
        }
    }
}




//resize canvas
function resize(){
    canvas.width = parseInt(getComputedStyle(document.getElementById('main')).getPropertyValue('width'));
    canvas.height = parseInt(getComputedStyle(document.getElementById('main')).getPropertyValue('height'));

    canvasMenu.width = parseInt(getComputedStyle(document.getElementById('menu')).getPropertyValue('width'));
    canvasMenu.height = parseInt(getComputedStyle(document.getElementById('menu')).getPropertyValue('height'));
}

window.setTimeout(function() {
    resize();
    window.addEventListener('resize', resize, false);
}, 50);


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
let canvas = null, ctx =null;
function start(){
    canvasMenu = document.getElementById('canvasMenu');
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    draw(ctx);
    redraw();
    verify();
}
window.addEventListener('load',start);