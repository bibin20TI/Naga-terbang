const naga = new Image();
naga.src = 'dragon.png';

class Bird {
  
	constructor(){
		this.x = 150;
		this.y = 200;

		this.vy = 0;
		this.originWidth = 941;
		this.originHeight = 680;
		this.width = this.originWidth/20;
		this.height = this.originHeight/20;
		this.weight = 1;
		this.frameX = 0;


	}

	update(){
        let curve = Math.sin(angle) * 5;
		if(this.y > canvas.height - (this.height * 3) + curve){
			this.y = canvas.height - (this.height* 3) + curve;
			this.vy = 0;
		}else{
			this.vy += this.weight;
			this.vy *= 0.9;
			this.y += this.vy;
		}

		if(this.y < 0 + this.height){
			this.y = 0 + this.height;
			this.vy = 0;
		}

	    if(tekanSpasi) this.flap();

	}

	draw(){
		ctx.fillStyle = "red";
        // ctx.fillRect(this.x,this.y,this.width,this.height);
        ctx.drawImage(naga,this.frameX * this.originWidth,0,this.originWidth,this.originHeight,this.x-20,this.y-12,this.width*1.7,this.height*1.7);

	}

	flap(){
		this.vy -= 2;
		if(this.frameX >= 3)this.frameX = 0;
		else if(frame % 2===0)this.frameX++;
	}
}

const burung = new Bird();