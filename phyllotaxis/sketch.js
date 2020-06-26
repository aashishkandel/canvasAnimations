n = 0
c = 4

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(164,64,179)
  angleMode(DEGREES)
  colorMode(HSB)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  angle = n * 137.5
  r = c * n**0.5
  x = r * cos(angle)+width/2
  y = r * sin(angle)+height/2
  noStroke()
  fill(n%255,255,255)
  circle(x,y,6)
  point(x,y)

  n++

}
