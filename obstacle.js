
      const  obstacleArray = [];
class Obstacle{
	constructor(){
		this.top = (Math.random()*canvas.height/3)+20;
		this.bottom = (Math.random() * canvas.height/3)+20;
		this.x = canvas.width;
		this.width=20
		// this.color = 'hsla('+ hue + ',100%,50%,1)';
		this.color = "black";
        this.tambah = false;
		}
		draw(){
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x,0,this.width,this.top);
			ctx.fillRect(this.x,canvas.height-this.bottom,this.width,this.bottom);
	}

	update(){
		this.x -= gameSpeed;
		if(!this.tambah && this.x < burung.x){
			score++;
			point.play();
			this.tambah = true;
		}
		this.draw();
	}
}

function handleObstacles(){

	if(frame % 50 ===0){
       obstacleArray.unshift(new Obstacle);
	}

	for(let i = 0; i < obstacleArray.length; i++){
		obstacleArray[i].update();
	}

	if(obstacleArray.length > 20){
		obstacleArray.pop(obstacleArray[0]);
	}
}
