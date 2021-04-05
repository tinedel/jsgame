let topplayer = document.querySelector('.topplayer');
let bottomplayer = document.querySelector('.bottomplayer');
let ball = document.querySelector('.ball');

let bottom = document.querySelector('.bottom');
let topc = document.querySelector('.top');
let field = document.querySelector('.field');

topplayer.style.left=((topc.clientWidth - topplayer.clientWidth)/2) + "px";
bottomplayer.style.left=((bottom.clientWidth - bottomplayer.clientWidth)/2) + "px";
ball.style.left=((field.clientWidth - ball.clientWidth)/2) + "px";
ball.style.top=((field.clientHeight - ball.clientHeight)/2) + "px";
