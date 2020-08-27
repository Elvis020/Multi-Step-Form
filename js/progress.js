// Selecting the Forms
let form1 = document.querySelector('#Form1'); 
let form2 = document.querySelector('#Form2'); 
let form3 = document.querySelector('#Form3');


// Selecting the Buttons
let Next1 = document.querySelector('#next1');
let Next2 = document.querySelector('#next2');
let Back1 = document.querySelector('#back1');
let Back2 = document.querySelector('#back2');


// Selecting the progress ID
let progress = document.querySelector('#progress');


// Adding CLick Events
Next1.onclick = function(){
    form1.style.left = '-450px';
    form2.style.left = '40px';
    progress.style.width = '240px'; 
}
Back1.onclick = function(){
    form1.style.left = '40px';
    form2.style.left = '450px';
    progress.style.width = '120px'; 
}
Next2.onclick = function(){
    form2.style.left = '-450px';
    form3.style.left = '40px';
    progress.style.width = '360px'; 
}
Back2.onclick = function(){
    form2.style.left = '40px';
    form3.style.left = '450px';
    progress.style.width = '240px'; 
}