function setup() {
  createCanvas(windowWidth, windowHeight)
  text = createElement("h1","touch anywhere to get some some bubbles")
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

particle = []
function draw() {
  text.position(windowWidth/3, windowHeight/9)
  background(164,64,0)
  for(i=0;i<5;i++){
    P = new Particle()
}
  particle.push(P)
  for(i=particle.length-1;i>=0;i--){
    particle[i].update()
    particle[i].show()
    if(particle[i].termination()){
      particle.splice(i,1)
    }
  }



}

class Particle{

  constructor(){
    this.x = mouseX
    this.y = mouseY
    this.vx = random(-1,1)
    this.vy = random(-5,-1)
    this.alpha=255
  }

  show(){
    noStroke()
    fill(233, this.alpha)
    circle(this.x, this.y, 16 )
  }

  update(){
    this.x+= this.vx
    this.y+= this.vy
    this.alpha-=4
  }

  termination(){
    return this.alpha<0
  }
}
