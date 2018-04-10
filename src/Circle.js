import React from 'react';
export default class Circle extends React.Component {
// setup canvas

canvas = document.querySelector('canvas');
ctx = this.canvas.getContext('2d');

width = this.canvas.width = window.innerWidth;
height = this.canvas.height = window.innerHeight;



// define circle constructor

constructor(props) {
  super(props);
  this.x = this.random(0,this.width);
  this.y = this.random(0,this.height);
  this.velX = this.random(-7,7);
  this.velY = this.random(-7,7);
  this.color = 'rgb(' + this.random(0,255) + ',' + this.random(0,255) + ',' + this.random(0,255) +')';
  this.size = this.random(10,20);
  this.circles = [];

  this.loop = this.loop.bind(this);
  this.random = this.random.bind(this);
  this.draw = this.draw.bind(this);
  this.update = this.update.bind(this);
  this.collisionDetect = this.collisionDetect.bind(this);
  
  this.state = {
    count : 0
  };

}



// function to generate random number

random(min,max) {
    let num = Math.floor(Math.random()*(max-min)) + min;
    return num;
  }

// define circle draw method

draw() {
  this.ctx.beginPath();
  this.ctx.fillStyle = this.color;
  this.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  this.ctx.fill();
}

// define circle update method

update() {
  if((this.x + this.size) >= this.width) {
    this.velX = -(this.velX);
  }

  if((this.x - this.size) <= 0) {
    this.velX = -(this.velX);

  }

  if((this.y + this.size) >= this.height) {
    this.velY = -(this.velY);
  }

  if((this.y - this.size) <= 0) {
    this.velY = -(this.velY);

  }

  if(((this.x - this.size) <= 0) || ((this.y - this.size) <= 0)){
    this.setState({
      count: this.state.count+1
    })
  }

  if(((this.y + this.size) >= this.height) || ((this.x + this.size) >= this.width)){
    this.setState({
      count : this.state.count-1
    });
  } 
  
  this.x += this.velX;
  this.y += this.velY;
}

// define circle collision detection

collisionDetect() {
  for(let circle of this.circles) {
    if( (!(this.x === circle.x && this.y === circle.y && this.velX === circle.velX && this.velY === circle.velY)) ) {
      let dx = this.x - circle.x;
      let dy = this.y - circle.y;
      let distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + circle.size) {
        circle.color = this.color = 'rgb(' + this.random(0,255) + ',' + this.random(0,255) + ',' + this.random(0,255) +')';
      }
    }
  }
}

// define array to store circles



// define loop that keeps drawing the scene constantly


loop() {
  console.log(this.ctx);
  this.ctx.fillStyle = 'rgba(0,0,0,0.25)';
  this.ctx.fillRect(0,0,this.width,this.height);

  while(this.circles.length < 25) {
    let circle = new Circle();
    this.circles.push(circle);
  }

  for(let circle of this.circles) {
    circle.draw();
    circle.update();
    circle.collisionDetect();
  }
 
  requestAnimationFrame(this.loop);
}





render(){
  this.loop();
  console.log(this.state.count);
  return (
  <div>
    <h1>{this.state.count}</h1>
    <canvas></canvas>
  </div>
  );
}

}
