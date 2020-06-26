function setup() {
  createCanvas(windowWidth, windowHeight)
  background(164,64,0)

  sliderObject =function(){
    this.increase_radius= 10
  }
  sliderObj = new sliderObject()

  slider = new dat.GUI()
  slider.add(sliderObj,'increase_radius', 5,25 )
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
var t = 0
var scal = 10
var slider

function draw() {
  translate(width/2, height/2)
  scal = sliderObj.increase_radius
  beginShape()
  x = (16*(sin(t))**3)*(scal)
  y = (13 *cos(t)-5*cos(2*t)-2*cos(3*t)-cos(4*t))*(-scal)
  strokeWeight(15)
  stroke(random(1)*255,random(1)*255,random(1)*255)
  point(x,y)//}
  endShape()

  t+=0.05
}
