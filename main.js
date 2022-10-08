const canvas = document.getElementById('canvas1');

const ctx = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 400;

let tekanSpasi = false;
let angle = 0;
let hue = 0;
let frame = 0;
let gameSpeed = 0;

function animasi(){

   burung.update();
   burung.draw();
}

animasi();

window.addEventListener('keydown',function(e){
	console.log(e.code);
   
   if(e.code === 'Space')tekanSpasi = true;
 
});

window.addEventListener('keyup',function(e){

	if(e.code === 'Space')tekanSpasi = false;
})

