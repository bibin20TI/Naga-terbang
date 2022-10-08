const particleArray = [];

class Particle{
	constructor(){
		this.x = burung.x;
		this.y = burung.y;
		this.size = Math.random() * 7 + 3;
		this.speedY = (Math.random() * 1)-0.5;
		this.color =  'hsla('+hue+',100%,50%,0.8)';
	}

	update(){
		this.x -= gameSpeed;
		this.y += this.speedY;
	}

	draw(){
		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
		ctx.fill();

			}
}

function handlerParticle(){
	particleArray.unshift(new Particle);

	for(i = 0; i < particleArray.length; i++){
		particleArray[i].update();
		particleArray[i].draw();
	}

	// jika lebih dari 200 hapus 20

	if(particleArray.length > 200){
		particleArray.pop(particleArray[i]);
	}
}

